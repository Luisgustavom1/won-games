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
        include: ['src/**/**/test.spec.tsx'],
        coverage: {
            provider: 'istanbul',
            include: ['src/components/*/index.tsx'],
            enabled: true,
        },
        bail: 1,
    },
});
