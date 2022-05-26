const routes = [
  {
    path: "/",
    name: "AppLayout",
    component: () => import("../layouts/AppLayout.vue"),
    children: [
      {
        path: "/",
        name: "LandingPage",
        component: () => import("../views/LandingPage.vue"),
        meta: {
          requiresAuth: false,
        },
      },
      {
        path: "/cari-seleramu",
        name: "CariSeleramu",
        component: () => import("../views/CariSeleramu.vue"),
        meta: {
          requiresAuth: false,
        },
      },
      {
        path: "/daftar-makanan",
        name: "Foods",
        component: () => import("../views/Foods.vue"),
        meta: {
          requiresAuth: false,
        },
      },
      {
        path: "/daftar-makanan/:id",
        name: "FoodDetail",
        component: () => import("../views/FoodDetail.vue"),
        meta: {
          requiresAuth: false,
        },
      },
      {
        path: "/keranjang",
        name: "Keranjang",
        component: () => import("../views/Keranjang.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/pesanan-sukses",
        name: "PesananSukses",
        component: () => import("../views/PesananSukses.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/reviewer",
        name: "Reviewer",
        component: () => import("../views/Reviewer.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/profile",
        name: "ReviewerProfile",
        component: () => import("../views/ReviewerProfile.vue"),
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/auth/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/auth/Register.vue"),
  },
];

export default routes;
