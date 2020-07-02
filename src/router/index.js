import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import WriteGoal from "../views/WriteGoal.vue";
import TestPage from "../views/TestPage.vue";
import TestPage2 from "../views/TestPage2.vue";
import TestPage3 from "../views/TestPage3.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/testpage3",
    name: "TestPage3",
    component: TestPage3,
  },
  {
    path: "/testpage2",
    name: "TestPage2",
    component: TestPage2,
  },
  {
    path: "/testpage",
    name: "TestPage",
    component: TestPage,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/write_goal",
    name: "WriteGoal",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: WriteGoal,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
