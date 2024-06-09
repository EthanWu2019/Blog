import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Blog/', // 确保这一行设置正确
  plugins: [react()],
  build: {
    outDir: 'docs', // 设置输出目录为 docs
    rollupOptions: {
      input: './public/index.html' // 确保 Vite 使用 public 目录下的 index.html 作为输入文件
    }
  }
});
