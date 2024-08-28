import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import ContactPage from '../components/ContactPage.vue';
import TherapyPage from '../components/TherapyPage.vue';
import DocumentsPage from '../components/DocumentsPage.vue';
import AboutMePage from '../components/AboutMePage.vue';
import PrivacyPolicyPage from '../components/PrivacyPolicyPage.vue';
import BusinessPage from '@/components/BusinessPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/contact', component: ContactPage },
  { path: '/therapy', component: TherapyPage },
  { path: '/documents', component: DocumentsPage },
  { path: '/about-me', component: AboutMePage },
  { path: '/privacy', component: PrivacyPolicyPage },
  { path: '/business', component: BusinessPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      // Handle scrolling to a specific section when there's a hash
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else {
      // Scroll to the top for all other routes
      return { top: 0 };
    }
  }
});

export default router;

