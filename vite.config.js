import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // ✅ Слушаем все интерфейсы
    port: process.env.PORT || 3000, // Берём порт из Render
  },
  preview: {
    host: '0.0.0.0', // Важно для Render!
    port: process.env.PORT || 3000,
    allowedHosts: [ // 👇 Разрешаем хост Render
      'task-tracker-web-erdc.onrender.com',
      'localhost', // Для локального теста
    ],
  },
})
