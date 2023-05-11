import { createI18n } from "vue-i18n"
import zhcn from "./zhcn"
import en from "./en"

// 准备翻译的语言环境信息
const i18n = createI18n({
  legacy: false,
  locale: navigator?.language || "zh-CN", // 初始化中文
  messages: {
    "zh-CN": zhcn,
    "en-US": en,
  },
})

export default i18n
