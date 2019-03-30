import pkg from "./package.json";

export default {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#3b8070" },

  /*
   ** Global CSS
   */
  css: ["~assets/app.styl"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~plugins/vutify.js", "~plugins/axios"],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    "@nuxtjs/vuetify",
    // TODO: Remove it if you want to eject from codeSandbox
    "./codesandbox"
  ],

  vuetify: {
    //  theme: { }
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    vendor: ["axios", "vuetify"],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
