# ==============================================
#                                               #
#               Stage: Builder                  #
#                                               #
# ===============================================
FROM europe-west1-docker.pkg.dev/vf-grp-aib-prd-mirror/dockerhub/tax-trans-price@sha256:e89026a4a59b831792e863edf904420bba34b23a815316fbb66e96ef3808dfd9 AS builder

# Upgrade openssl to address vulnerabilities (CVE-2026-9076, etc.)
#RUN apk upgrade --no-cache libssl3 openssl

WORKDIR /app

# Copy package files and install ALL dependencies
# COPY package*.json ./

# RUN npm ci --no-audit

# Copy the rest of the application code
COPY . .

# Set PUBLIC_URL for the build
# ARG PUBLIC_URL="/vf-grp-aib-prd-mc2-sai-lab/iot-agent-dev-frontend/"
# ENV PUBLIC_URL=${PUBLIC_URL}

ARG PUBLIC_URL="/vf-grp-aib-prd-ncl-tax-lab/tax-trans-price-dev/"

ENV PUBLIC_URL=${PUBLIC_URL}
# Build the frontend assets (outputs to /app/dist)
RUN npm run build

# ==============================================
#                                               #
#    Stage: Prod (Node.js - External Build)     #
#                                               #
# ===============================================
FROM europe-west1-docker.pkg.dev/vf-grp-aib-prd-mirror/dockerhub/tax-trans-price@sha256:e89026a4a59b831792e863edf904420bba34b23a815316fbb66e96ef3808dfd9 AS prod

WORKDIR /app

# Copy the server file and the PRE-BUILT static assets from the local host
COPY server.js ./
COPY --from=builder /app/dist ./dist

COPY package.json ./

ARG NODE_ENV="production"
ENV NODE_ENV=${NODE_ENV}
ARG PORT=8082
ENV PORT=${PORT}

ARG PUBLIC_URL="/vf-grp-aib-prd-ncl-tax-lab/tax-trans-price-dev/"

ENV PUBLIC_URL=${PUBLIC_URL}
# RUN npm install --omit=dev --no-audit

EXPOSE 8082
CMD ["node", "server.js"]