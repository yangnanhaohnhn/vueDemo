import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import MessageDetail from '../pages/MessageDetail.vue'

Vue.use(VueRouter)

export default new VueRouter({
    // 注册应用中所有的路由
    routes: [
        {
            path: '/about',
            name:'about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            // path: 'detail/:id',//:id为占位符
                            path: 'detail',
                            component: MessageDetail
                        }
                    ]
                }, {
                    path: '/',
                    redirect: '/home/news'
                }
            ]
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
})
