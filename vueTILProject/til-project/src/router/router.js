import WritePostView from '../components/WritePost.vue'
import LoginView from '../components/LoginView.vue'
import PostListView from '../components/PostListView.vue'
import Vue from 'vue';
import VueRouter from 'vue-router';
    
Vue.use(VueRouter);

const routes = [
    { path: '/post', component: WritePostView },
    { path: '/login', component: LoginView },
    { path: '/list', component: PostListView },
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

export default router;
