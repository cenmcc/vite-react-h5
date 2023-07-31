import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import postcssPresetEnv from "postcss-preset-env";
import postcssPxToRem from "postcss-pxtorem";


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "*": path.resolve(""),
    },
  },
  css: {
    postcss: {
      plugins: [
        postcssPresetEnv(),
        postcssPxToRem({
          rootValue: 37.5, // 换算的基数(设计图750的根字体为75)
          rootValuePC: 192,
          // selectorBlackList: ['.van-'], // 忽略转换正则匹配项
          propList: ["*"],
        }),
      ],
    },
  },
});
