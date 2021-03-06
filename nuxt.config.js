export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "appideas",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["~/plugins/axios-accessor.ts"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next"],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  axios: {
    baseURL: "http://localhost:8000/api" // Used as fallback if no runtime config is provided
  },

  auth: {
    strategies: {
      laravelJWT: {
        url: "http://localhost:8000",
        token: {
          maxAge: 60 * 60 // same as ttl but in seconds
        },
        refreshToken: {
          maxAge: 20160 * 60 // same as refresh_ttl but in seconds
        }
      }
    },
    vuex: false
  }
};
