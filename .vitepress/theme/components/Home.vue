<template #home-hero-image>
  <iframe
    height="450px"
    width="100%"
    style="color-scheme: light"
    src="/Docs/demos/homeModel.html"
    frameborder="0"
  >
  </iframe>
</template>

<script setup lang="ts">
// import DefaultTheme from "vitepress/theme"
import { onMounted } from "vue"

// const { Layout } = DefaultTheme
onMounted(() => {
  const imgbg: any = document.getElementsByClassName("image-bg")[0]
  imgbg.style.display = "none"
})
</script>
