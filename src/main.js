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
import TabMenu from 'primevue/tabmenu';
import DataTable  from 'primevue/datatable';
import Column from 'primevue/column';

import ToDo from './components/to-do/Todo.vue';
import Table from './components/table/Table.vue';

Vue.use(VueRouter);
Vue.use(PrimeVue);
Vue.component('P-InputText', InputText);
Vue.component('P-Checkbox', Checkbox);
Vue.component('P-Button', Button);
Vue.component('P-Card', Card);
Vue.component('P-TabMenu', TabMenu);
Vue.component('P-DataTable', DataTable);
Vue.component('P-Column', Column);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/todo',
      name: 'todo',
      component:ToDo
    },
    {
      path: '/table',
      name: 'table',
      component: Table
    }
    
  ]
});

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});

