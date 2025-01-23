/* eslint-disable no-useless-escape -- Default values of vitest */
import {defineConfig} from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

// eslint-disable-next-line import/no-default-export -- required by Vite
export default defineConfig({
    plugins: [tsconfigPaths()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./vitest.setup.ts'],
        exclude: [
            '**\/node_modules/**',
            '**\/dist/**',
            '**\/.{idea,git,cache,output,temp}/**',
            '**\/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*',
        ],
        coverage: {
            reporter: ['lcov', 'html'],
            exclude: ["node_modules/"],
        },
    },
});