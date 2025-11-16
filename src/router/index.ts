import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Todo from "@/views/TodoTask.vue";
import NotFound from "@/views/NotFound.vue";
import Slide from "@/views/SlideShow.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/todo",
      name: "TodoTask",
      component: Todo,
    },
    {
      path: "/slide",
      name: "Slide",
      component: Slide,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
