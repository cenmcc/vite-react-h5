import { type ConfigEnv, type UserConfigExport, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import postcssPresetEnv from "postcss-preset-env";
import postcssPxToRem from "postcss-pxtorem";

export default (configEnv: ConfigEnv): UserConfigExport => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd());
  const { VITE_API_BASE_URL } = viteEnv;
  return {
    base: "/",
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      https: false,
      host: true,
      port: 3333,
      open: true,
      cors: true,
      strictPort: false,
      proxy: {
        [VITE_API_BASE_URL]: {
          target: VITE_API_BASE_URL,
          ws: true,
          changeOrigin: true,
          rewrite: (path) => path.replace(VITE_API_BASE_URL, ""),
        },
      },
    },
    css: {
      postcss: {
        plugins: [
          postcssPresetEnv(),
          postcssPxToRem({
            rootValue: 37.5,
            rootValuePC: 192,
            selectorBlackList: ['.adm'], // 忽略转换正则匹配项
            propList: ["*"],
          }),
        ],
      },
    },
  };
};
