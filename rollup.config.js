import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "main.js",
  output: {
    dir: "build",
    format: "es",
    generatedCode: 'es2015',
    sourcemap: true,
    assetFileNames:  '[name]-[hash].[ext]',
    chunkFileNames: 'chunk-[hash].js',
    entryFileNames: '[name]-[hash].js'
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    terser(),
  ],
  preserveEntrySignatures: false,
};
