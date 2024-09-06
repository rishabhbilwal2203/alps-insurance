// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// export default defineConfig({
  
//   server: {
//     proxy: {
//       '/api': {
//         target: 'https://www.zohoapis.in', // Target Zoho API
//         changeOrigin: true, // Fix for CORS
//         rewrite: (path) => path.replace(/^\/api/, ''), // Remove "/api" prefix
//         secure: false, // Ignores SSL verification
//       }
//     }
//   }
// });

import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://www.zohoapis.in', // Your backend server
        changeOrigin: true,              // This is important for virtual hosted sites
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: remove `/api` prefix from requests
      }
    }
  }
});





