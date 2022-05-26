import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.path === "/login" && auth.currentUser) {
//     next("/");
//     return;
//   }
//   if (to.matched.some((record) => record.meta.requiresAuth) && !auth.currentUser) {
//     next("/login");
//     return;
//   }
//   next();
// });

router.beforeEach((to, from, next) => {
  onAuthStateChanged(getAuth(), (user) => {
    if (to.name === "Login" || to.name === "Register") {
      if (user !== null) {
        next({
          path: from.path,
        });
      } else {
        next();
      }
    } else {
      if (to.meta.requiresAuth) {
        if (user === null) {
          next({ path: "/login" });
        } else {
          next();
        }
      } else {
        next();
      }
    }
  });
});

export default router;
