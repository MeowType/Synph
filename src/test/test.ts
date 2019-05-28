import Vue from 'vue'
import App from './App.vue'
import 'vue-property-decorator'

Vue.config.productionTip = false

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        render: h => h(App),
    }).$mount('#app')
})