import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home"
import About from "../components/About"

Vue.use(VueRouter)

const routes = new VueRouter({
    mode: "history",
    routes: [
        {path : "/", component: Home},
        {path : "/about", component: About},
    ]   
})

export default routes