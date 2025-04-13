import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 关键配置：将你的库指向源码目录
      '@kaokei/use-react-service': path.resolve(__dirname, '../src'),
    },
  },
});
