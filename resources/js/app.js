/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import List from './components/List.vue'
import Form from './components/Form.vue'
import Detail from './components/Detail.vue'
import Navbar from './components/Navbar.vue'
import VueRouter from 'vue-router'; // Vue Routerの読み込み
Vue.use(VueRouter); // Vue.jsで、Vue Routerを使うように設定


// vue-routerによるルーティング設定
const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: List, name: 'list' }, // ルートでアクセスしたら、List.vueを表示
        { path: '/create', component: Form, name: 'create' }, // createにアクセスしたらForm.vueを表示
        { path: '/:id', component: Detail, name: 'detail' }, // id番号でアクセスしたらDetail.vueを表示
    ]
});


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('navbar', Navbar); //ページ上部にメニューバーを表示させたいので、Navbar.vueを登録

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.jsの実行
const app = new Vue({
    router
}).$mount('#app');