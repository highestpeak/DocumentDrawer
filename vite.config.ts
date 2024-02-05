import { defineConfig } from 'vite'
import vuetify from "vite-plugin-vuetify";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://www.npmjs.com/package/vite-plugin-vuetify
    vuetify({
      autoImport: {
        labs: true,
        ignore: [
          // 'VAlert', // Component name
          // 'Ripple', // Directive name
        ]
      }
    })
  ],
})
