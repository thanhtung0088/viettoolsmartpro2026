import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // KHÔNG thêm build.rollupOptions.input trừ khi thầy cố ý multi-page
  // Nếu có dòng input sai → xóa hoặc comment
  // build: {
  //   rollupOptions: {
  //     input: 'something'  // ← nếu có thì xóa phần này
  //   }
  // }
})