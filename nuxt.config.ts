// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  runtimeConfig: {
    app: {
      // a timestamp (or other long string which can change on a request-by-request basis)
      ts: "LWEULj7s3cporxWrd",
      privateKey: "39d67de0c1f9ee4a078d737b9393e4e51a74d271",
      publicKey: "79443dde184d91dab5ea0d9881f586c0",
    },
    public: {
      apiBaseUrl: process.env.API_BASE_URL
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})