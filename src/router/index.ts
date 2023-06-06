/*
 * @Descripttion: 全局路由配置
 * @version: 模块说明
 * @Author: wangfquan
 * @Date: 2023-06-05 11:19:01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-06 10:27:57
 */
import routes from "./routes";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  // history: createWebHashHistory(),  // hash 模式
  history: createWebHistory(), // history 模式
  routes
});
// 全局路由守卫
router.beforeEach((to, from, next) => {
  console.log(to, from);
  if (to.meta.title) {
    document.title = `${to.meta.title}`;
  }
  next();
});

router.afterEach((to, from) => {
  console.log("afterEach");
  console.log(to);
  console.log(from);
});

export default router;
