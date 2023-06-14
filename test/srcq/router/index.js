import VueRouter from "vue-router";

import HeiBei from "../components/HeiBei";
import HeNan from "../components/HeNan";
const router = new VueRouter({
    routes:[{
        path:'./hebei',
        component:HeiBei
    },{
        path:'/henan',
        component:HeNan
    }
    ]
})
export default router
