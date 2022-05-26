import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { auth } from "../firebase";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login" && auth.currentUser) {
    next("/");
    return;
  }
  if (to.matched.some((record) => record.meta.requiresAuth) && !auth.currentUser) {
    next("/login");
    return;
  }
  next();
});

export default router;
