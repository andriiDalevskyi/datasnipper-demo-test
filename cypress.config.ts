import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'mhcwtq',
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    baseUrl: "https://www.datasnipper.com"
  },
})