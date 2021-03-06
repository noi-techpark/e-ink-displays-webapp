import Vue from "vue";
import Router from "vue-router";
import Displays from "@/components/Displays.vue";
import Login from "@/components/Login.vue";
import Create from "@/components/create/Create.vue";
import Update from "@/components/update/Update.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: {
        name: "login"
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/create",
      name: "Create",
      component: Create
    },
    {
      path: "/update",
      name: "Edit",
      component: Update
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Displays
    }
  ]
});
