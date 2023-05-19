import { defineConfig } from "vitepress"
import VueSetupExtend from "vite-plugin-vue-setup-extend"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "./src",
  outDir: "./dist",
  title: "GEngine-Js",
  titleTemplate: "The Lightwight Render Library",
  base: "/Docs/",
  description: "Rendering engine based on webGPU",
  head: [["link", { rel: "icon", href: "/Docs/assets/GEngineIcon.png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/assets/GEngineIcon.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/components/guide/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Getting Started", link: "/components/guide/markdown-examples" },
          { text: "Runtime API Examples", link: "/components/api/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/GEngine-js/GEngine" }],
  },
  vite: {
    // baseUrl: "",
    // base: "./",
    server: {
      open: true,
    },
    plugins: [
      VueSetupExtend(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
})
