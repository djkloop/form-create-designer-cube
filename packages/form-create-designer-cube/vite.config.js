/*
 * @Author: your name
 * @Date: 2021-05-02 23:43:09
 * @LastEditTime: 2021-06-10 12:22:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /form-create-designer-plugins/packages/form-create-designer-cube/vite.config.js
 */
import path from "path";
import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import esbuildElementUIPlugin from "esbuild-plugin-vite-element-ui";

const config = defineConfig({
  resolve: {
    alias: {
      "@": `${path.resolve(__dirname, "src")}`,
    },
    dedupe: ["vue-demi"],
  },

  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "dk-cube",
    },
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: [
        "vue",
        "vue-demi",
        "element-ui",
        "@form-create/element-ui",
        "@form-create/designer",
      ],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
          "vue-demi": "VueDemi",
          "element-ui": "ElementUI",
          formCreate: "formCreate",
          FcDesigner: "FcDesigner",
        },
      },
    },
    minify: false,
  },

  plugins: [
    createVuePlugin({
      jsx: true,
      jsxOptions: {
        compositionAPI: true,
      },
    }),
  ],

  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildElementUIPlugin()],
    },
  },

  server: {
    port: 8099,
  },
});

export default config;
