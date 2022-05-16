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
      },
      {
        path: "/cari-seleramu",
        name: "CariSeleramu",
        component: () => import("../views/CariSeleramu.vue"),
      },
      {
        path: "/daftar-makanan",
        name: "Foods",
        component: () => import("../views/Foods.vue"),
      },
      {
        path: "/daftar-makanan/:id",
        name: "FoodDetail",
        component: () => import("../views/FoodDetail.vue"),
      },
      {
        path: "/keranjang",
        name: "Keranjang",
        component: () => import("../views/Keranjang.vue"),
      },
      {
        path: "/pesanan-sukses",
        name: "PesananSukses",
        component: () => import("../views/PesananSukses.vue"),
      },
      {
        path: "/reviewer",
        name: "Reviewer",
        component: () => import("../views/Reviewer.vue"),
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
