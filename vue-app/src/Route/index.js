import {createRouter, createWebHistory} from "vue-router/dist/vue-router";

//import components
import HomeApp from "@/components/Page/Home/HomeApp";
import ContactApp from "@/components/Page/Contact/ContactApp";
import NotFount from "@/components/Page/Nopage/NotFount";
import ProductApp from "@/components/Page/Product/ProductApp";
import TodoList from "@/components/Page/TodoList";
import User_App_CRUD from "@/components/Page/CRUD_User/User_App_CRUD";

const routes = [
    {
        path:'/',
        component:HomeApp
    },
    {
        path:'/contact',
        component:ContactApp
    },
    {
        path:'/products',
        component:ProductApp
    },
    {
        path:'/todo',
        component:TodoList
    },
    {
        path:'/user',
        component:User_App_CRUD
    },
    {
        path:'/:pathMatch(.*)*',
        component:NotFount
    },

]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router