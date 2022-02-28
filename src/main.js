import Vue from 'vue';
import App from './App.vue';
import './index.css';
import VueMeta from "vue-meta";
import './registerServiceWorker';

Vue.use(VueMeta)

Vue.config.productionTip = false
Vue.config.silent = true

new Vue({
    render: h => h(App),
}).$mount('#app')