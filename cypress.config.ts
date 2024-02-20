import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'xxa2rx',
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    baseUrl: "https://www.datasnipper.com"
  },
})