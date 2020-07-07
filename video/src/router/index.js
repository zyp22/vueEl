import Vue from "vue";
import VueRouter from "vue-router";
// import Dashboard from "./dashboard.js";

Vue.use(VueRouter);

// export const contentRoute = [...Dashboard];

const routes = [
  {
    path: "/",
    name: "Home",
    component: resolve => require(["@/views/home/Index.vue"], resolve),
    meta: {
      title: "首页"
    },
    redirect: "/home/1",
    children: [
      {
        path: "/home/:id",
        name: "Home",
        component: resolve => require(["@/views/home/Index.vue"], resolve),
        meta: {
          title: "首页"
        }
      }
    ]
  }
];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const router = new VueRouter({
  routes
});

export default router;
