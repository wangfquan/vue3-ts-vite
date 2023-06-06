/*
 * @Descripttion: 路由配置及RouteRecordRaw类型校验
 * @version: 模块说明
 * @Author: wangfquan
 * @Date: 2023-06-05 11:21:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-06 13:21:44
 * router.ts当中的RouteRecordRaw类型校验，是为了规划化ts开发，增加路由对象类型限制，好处就是允许在基础路由里面增加开发者自定义属性
 */
import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "index",
    meta: {
      title: "首页"
    },
    component: () => import("@/views/homePage/homePage.vue")
  },
  {
    path: "/listIndex",
    name: "list",
    meta: {
      title: "表格页"
    },
    component: () => import("@/views/list/listIndex.vue")
  }
];
export default routes;
