<template>
  <button @click="toggleDark()">
    <span class="ml-2">{{ isDark ? "Dark" : "Light" }}</span>
    --
    <span>{{ t("homeView.examples") }}}</span>
  </button>
</template>
<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core"
import { useI18n } from "vue-i18n"

const isDark = useDark()
const toggleDark = useToggle(isDark)

const { t } = useI18n()
</script>
<style scoped></style>
