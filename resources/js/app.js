require('./bootstrap');

window.Vue = require('vue');

import store from './store/index'



/*Vue.component('posts', require('./components/Posts.vue'))
Vue.component('createPost', require('./components/CreatePost.vue'))*/

import Posts from "./components/Posts";
Vue.component('Posts', Posts);

import CreatePost from "./components/CreatePost";
Vue.component('CreatePost', CreatePost);

const app = new Vue({
    el: '#app',
    store
});
