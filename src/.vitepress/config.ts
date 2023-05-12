import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GEngine-Js",
  base:"/GEngine/",
  description: "Rendering engine based on webgpu",
  head: [ ['link', { rel: 'icon', href: "/assets/GEngineIcon.png"}]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/GEngineIcon.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/GEngine-js/GEngine' }
    ]
  }
})
