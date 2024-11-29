// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  root: "./",
  css: {
    postcss: "./postcss.config.js",
  },
  build: {
    outDir: "./dist", // Output directory
  },
  server: {
    port: 3000, // Cổng phát triển mặc định
    watch: {
      usePolling: true, // Theo dõi thay đổi ngay cả khi file config sửa
      interval: 300, // Khoảng thời gian kiểm tra thay đổi (ms)
    },
  },
  plugins: [], // Thêm các plugin nếu cần
});
