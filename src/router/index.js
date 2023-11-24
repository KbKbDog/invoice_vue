import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";
import LoginView from '../views/LoginView.vue'
import ListView from "@/views/ListView.vue";

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/list',
    component: ListView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next)=>{
  // 验证token
  let token = localStorage.getItem("token");
  if(token|| to.path === "/login") {
    next();
  }else {
    next("/login");
  }
})

export default router