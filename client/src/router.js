import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';

import AddPost from './components/Posts/AddPost.vue';
import Posts from './components/Posts/Posts.vue';

import Profile from './components/Auth/Profile.vue';
import Signup from './components/Auth/SignUp.vue';
import Signin from './components/Auth/SignIn.vue';



Vue.use(Router);

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/posts',
      name: 'post',
      component: Posts,
    },
    {
      path: '/post/addpost',
      name: 'addpost',
      component: AddPost,
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
  ],
});
