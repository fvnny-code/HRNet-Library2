import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

/// <reference types="vitest" />
/// <reference types="vite/client" />

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // @ts-ignore
    test: {
        globals: true,
        environment: 'jsdom',
        coverage: {
            reporter: ['text', 'json', 'html'],
        },
        watch: false
    }
})