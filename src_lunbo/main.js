import Vue from 'vue'
import App from './App.vue'
import scroll from 'vue-seamless-scroll'
Vue.use(scroll)
new Vue({
    el:"#app",
    components:{App},
    template:'<App/>' 
})