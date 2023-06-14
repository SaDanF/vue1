// 怎么使用vueRouter
import VueRouter   from "vue-router"
import HeNan from "@/components/HeNan";
import HeBei from "@/components/HeBei";

//创建路由对象并在路由器中分配
const router =new VueRouter({
    routers:[
        //这是其中的一个子路由
        {
            path:'/hebei',
            component:HeBei
        },
        {
            path: '/henan',
            component: HeNan
        }
    ]
})
export default router
