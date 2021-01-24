import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TermsCondition from "../views/TermsCondition.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "termsCond",
        name: "termsAndCond",
        component: TermsCondition
      }
    ]
  },
  {
    path: "/userInfo",
    name: "UserInfo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "userInfo" */ "../views/UserInfo.vue")
  },
  {
    path: "/contactUs",
    name: "ContactUs",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/ContactUs.vue")
  },
  {
    path: "/:catchAll(.*)",
    redirect: { name: "Home" }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
