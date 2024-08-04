import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import ContactPage from '../components/ContactPage.vue';
import TherapyPage from '../components/TherapyPage.vue';
import DocumentsPage from '../components/DocumentsPage.vue';
import AboutMePage from '../components/AboutMePage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/contact', component: ContactPage },
  { path: '/therapy', component: TherapyPage },
  { path: '/documents', component: DocumentsPage },
  { path: '/about-me', component: AboutMePage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
