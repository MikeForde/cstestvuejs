import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import ContactPage from '../components/ContactPage.vue';
import HumanGivens from '../components/HumanGivens.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/contact', component: ContactPage },
  { path: '/human-givens', component: HumanGivens }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
