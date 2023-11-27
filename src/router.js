// import Vue from 'vue';
// import Router from 'vue-router';
import ViewHome from './views/ViewHome.vue';
import ViewProfile from './views/ViewProfile.vue';
import ViewMessages from './views/ViewMessages.vue';
import ViewSettings from './views/ViewSettings.vue';
import ViewHelp from './views/ViewHelp.vue';

// Vue.use(Router);


import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: ViewHome },
    { path: '/profile', component: ViewProfile },
    { path: '/messages', component: ViewMessages },
    { path: '/settings', component: ViewSettings },
    { path: '/help', component: ViewHelp }
  ]
});

export default router;
