import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    supportFile: false,
    baseUrl: 'http://127.0.0.1:4173',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
  },
});
