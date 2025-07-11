import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        laravel(['resources/js/src/main.tsx', 'resources/js/src/index.css']),
        react(),
        tailwindcss()
    ],
//      optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
});