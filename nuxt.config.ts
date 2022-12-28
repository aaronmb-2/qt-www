// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  runtimeConfig: {
    // secret: process.env.SECRET,
    public: {
      environment: process.env.BASE_URL,
      baseUrl: process.env.BASE_URL,
      mainUrl: process.env.BASE_URL,
    }
  },
  app: {
    /*
    ** Headers of the page
    ** Setting correct values should help SEO results
    */
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'QuantTrade',
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Algorithmic trading solution for individuals",
        },
        { name: "theme-color", content: "#ffffff" },
        { name: "msapplication-TileColor", content: "#da532c" },

        // open graph
        // https://masteringnuxt.com/blog/setting-up-nuxt-for-social-cards-and-meta-tags-to-improve-seo
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:title', property: 'og:title', content: "QuantTrade" },
        { hid: 'og:url', property: 'og:url', content: process.env.BASE_URL },
        { hid: 'og:description', property: 'og:description', content: "Algorithmic trading solution for individuals" },
        { hid: 'og:image', property: 'og:image', content: process.env.BASE_URL + "/qt-logo.png"},
        
        // twitter card
        { hid: "twitter:title", name: "twitter:title", content: "QuantTrade" },
        { hid: "twitter:url", name: "twitter:url", content: process.env.BASE_URL },
        { hid: 'twitter:description', name: 'twitter:description', content: "Algorithmic trading solution for individuals" },
        { hid: "twitter:image", name: "twitter:image", content: process.env.BASE_URL + "/qt-logo.png"},
      ],
      // Setting favicons and other logos
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png"
        },
        { rel: 'icon', 
          type: 'image/x-icon', 
          href: '/favicon.ico' 
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png"
        },
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" }
      ],
    }
  },
  modules: [
    // https://github.com/ymmooot/nuxt-jsonld
    'nuxt-jsonld',
    // https://github.com/funkenstudio/sitemap-module-nuxt-3
    '@nuxtjs/robots',
    // https://github.com/nuxt-community/robots-module
    '@funken-studio/sitemap-nuxt-3',
  ],
  // config for sitemap-module
  sitemap: {
    hostname: process.env.MAIN_URL, 
  },
  // config for robots-module
  robots: {
    UserAgent: "*",
    Disallow: "",
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      "postcss-import": {},
      "tailwindcss/nesting": {},
    },
  },
});