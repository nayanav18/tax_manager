import express from 'express';
import path from 'path';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import dotenv from 'dotenv';
import { BigQuery } from '@google-cloud/bigquery';

dotenv.config();

const PORT = process.env.PORT || 8082;
const PROJECT_ID = process.env.PROJECT_ID  || 'vf-grp-datahub';
const PUBLIC_URL = process.env.PUBLIC_URL || '/vf-grp-aib-prd-ncl-tax-lab/tax-trans-price-dev/';
const BQ_LOCATION = process.env.BQ_LOCATION || 'EU';
const BQ_DATASET = process.env.BQ_DATASET || 'vfgrp_dh_lake_processed_group_tax_reporting_s';
const NODE_ENV = process.env.NODE_ENV || 'development';
const isProd = NODE_ENV === 'production';

const baseRoute = '/' + PUBLIC_URL.replace(/^\/+|\/+$/g, '');
const DIST_DIR = path.join(import.meta.dirname, 'dist');

const app = express();
const bigquery = new BigQuery({ 
    projectId: PROJECT_ID,
    location: BQ_LOCATION
});

// Production-only settings
if (isProd) {
  app.set('trust proxy', 1);
}

// Basic security and performance middleware
app.use(helmet({ contentSecurityPolicy: false })); // true in prod
app.use(cors());
app.use(compression());
app.use(express.json());

// Request Logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// API routes
app.get('/health', (req, res) => {
  res.json({ status: 'ok', environment: NODE_ENV });
});

const marketHandler = async (req, res) => {
    try {
        const result = await bigquery.query({query: `
        SELECT * 
        from \`${PROJECT_ID}.${BQ_DATASET}.local_market_master\` 
        WHERE is_active = true;`, location: BQ_LOCATION});
        const [rows] = result;
    
        res.json({
            success: true,
            data: rows
        })
    }
    catch(err) {
        console.error("Query failed: ", err);
        res.json({
            success: false,
            data: [],
            error: err.message
        })
    };
};

app.get(`${baseRoute}/api/market`, marketHandler);
app.get('/api/market', marketHandler);

// Static Assets
const staticMiddleware = express.static(DIST_DIR, {
  maxAge: isProd ? '1y' : 0,
  immutable: isProd,
  fallthrough: true
});

app.use(baseRoute, staticMiddleware);
app.use('/', staticMiddleware);

// const knownRoutes = ['Overview', 'Discovery', 'Leads', 'Settings', 'Analysis', 'configuration', 'accounts', 'overview', 'discovery', 'leads'];
// knownRoutes.forEach(route => {
//   const handler = (req, res) => res.sendFile(path.join(DIST_DIR, 'index.html'));
//   app.get(`${baseRoute}/${route}`, handler);
// });

app.get(/(.*)/, (req, res, next) => {
  const isFileRequest = path.extname(req.url) !== '';
  if (isFileRequest) {
    return res.status(404).send('Asset not found');
  }
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(
        `Server Env: ${NODE_ENV}, please update environment variable NODE_ENV to change that. (production/development).`
    );
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use.`);
    } else {
        console.error('Server startup error:', err);
    }

    process.exit(1);
});

// Graceful shutdown
const shutdown = (signal) => {
    console.log(`${signal} received. Shutting down server gracefully...`);

    server.close(() => {
        console.log('Server closed successfully');
        process.exit(0);
    });

    setTimeout(() => {
        process.exit(1);
    }, 10000);
};

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));