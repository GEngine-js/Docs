import {createApp} from "vue";
import {createPinia} from "pinia";
import App from "./App.vue";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import elementZhCn from "element-plus/es/locale/lang/zh-cn";
import router from "./router/index";
import i18n from './lang/index';
import "element-plus/dist/index.css";
import 'element-plus/theme-chalk/dark/css-vars.css';
import "./style/index.css";


const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(ElementPlus, {
  locale: elementZhCn,
});
// 注册elementplus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");

