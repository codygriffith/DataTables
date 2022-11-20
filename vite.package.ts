import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";

export default defineConfig({
    plugins: [svelte()],
    build: {
        lib: {
            name: 'DataTables',
            entry: resolve(__dirname, 'src', 'lib', 'index.js'),
            formats: ['es', 'cjs', 'umd', 'iife'],
            fileName: (ext) => `${ext}/DataTable.js`,
        },
        target: 'esnext',
        sourcemap: true,
        cssCodeSplit: true
    }
})