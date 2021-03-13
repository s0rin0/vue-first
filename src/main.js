import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import PrimeVue from 'primevue/config';

import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
import Card from 'primevue/card';

Vue.use(VueRouter);
Vue.use(PrimeVue);
Vue.component('P-InputText', InputText);
Vue.component('P-Checkbox', Checkbox);
Vue.component('P-Button', Button);
Vue.component('P-Card', Card);

new Vue({
  el: '#app',
  render: h => h(App)
});

