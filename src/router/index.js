import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import ContactPage from '../components/ContactPage.vue';
import HumanGivens from '../components/HumanGivens.vue';
import DocumentsPage from '../components/DocumentsPage.vue';
import AboutMePage from '../components/AboutMePage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/contact', component: ContactPage },
  { path: '/human-givens', component: HumanGivens },
  { path: '/documents', component: DocumentsPage },
  { path: '/about-me', component: AboutMePage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
