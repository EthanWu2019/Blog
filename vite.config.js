import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Blog/', // 确保这一行设置正确
  plugins: [react()],
});
