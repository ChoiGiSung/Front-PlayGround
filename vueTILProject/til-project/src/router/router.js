import WritePost from '../components/WritePost.vue'
import Vue from 'vue';
import VueRouter from 'vue-router';
    
Vue.use(VueRouter);

const routes = [
    { path: '/post', component: WritePost },
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

export default router;
