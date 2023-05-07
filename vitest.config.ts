import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    test: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
        globals: true,
        environment: 'jsdom',
        setupFiles: './test/setup.ts',
        css: true,
        coverage: {
            provider: 'istanbul',
            include: ['src/**'],
            exclude: ['src/app/*'],
        },
        bail: 1,
    },
});
