import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
    plugins: [react()],
    base: env.PUBLIC_URL || '/vf-grp-aib-prd-ncl-tax-lab/tax-trans-price-dev/',
        //server: {allowedHosts:["3689c7608da3b9cb-dot-europe-west1.notebooks.googleusercontent.com"]}
}})

