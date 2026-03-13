import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import ContactPage from '../components/ContactPage.vue';
import TherapyPage from '../components/TherapyPage.vue';
import CoupleTherapyPage from '../components/CouplesTherapyPage.vue';
import DocumentsPage from '../components/DocumentsPage.vue';
import AboutMePage from '../components/AboutMePage.vue';
import PrivacyPolicyPage from '../components/PrivacyPolicyPage.vue';
import BusinessPage from '@/components/BusinessPage.vue';
import TestimonialPage from '@/components/TestimonialPage.vue';
import LifeCoachingPage from '@/components/LifeCoachingPage.vue';
import FaqPage from '@/components/FaqPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/contact', component: ContactPage },
  { path: '/therapy', component: TherapyPage },
  { path: '/couplestherapy', component: CoupleTherapyPage },
  { path: '/life-coaching', component: LifeCoachingPage },
  { path: '/documents', component: DocumentsPage },
  { path: '/about-me', component: AboutMePage },
  { path: '/privacy', component: PrivacyPolicyPage },
  { path: '/business', component: BusinessPage },
  { path: '/testimonials', component: TestimonialPage },
  { path: '/faq', component: FaqPage },
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

