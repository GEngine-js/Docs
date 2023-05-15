import { defineConfig } from "vitepress"
import path from "path"
const ENV_PATH = path.resolve(__dirname, "environments")

const { BUILD } = process.env
// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "./src",
  outDir: BUILD == 'build' ? "./dist" : "./release",
  title: "GEngine-Js",
  base: "/GEngine/",
  description: "Rendering engine based on webgpu",
  head: [["link", { rel: "icon", href: "/assets/GEngineIcon.png" }]],
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
  },
})
