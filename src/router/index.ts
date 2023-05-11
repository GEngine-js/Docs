import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/components/home/views/HomeView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    children: [
      {
        path: "/api",
        name: "ApiView",
        component: () => import(/* webpackChunkName: "createenv" */ "@/components/api/views/ApiView.vue"),
      },
      {
        path: "/examples",
        name: "ExamplesView",
        component: () => import(/* webpackChunkName: "creatraining" */ "@/components/examples/views/ExamplesView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path) {
    next();
  } else {
    next()
  }
});

export default router;
