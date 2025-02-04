<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <Navbar />
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main class="main-bg o-hidden">
        <Header />
        <FAQS />
        <Numbers />
        <Testimonials />
        <Clients />
        <Blog />
        <Marq2 />
      </main>
      <Footer />
    </div>
  </div>
</template>
<script setup>
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/cusor';
import LoadingScreen from '@/components/common/loader';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import Marq2 from '@/components/common/Marq2';
import Clients from '@/components/common/Clients';
import Blog from '@/components/home-main/Blog';
import Testimonials from '@/components/home-creative-agency/Testimonials';
import Header from '@/components/page-FAQ/Header';
import FAQS from '@/components/page-FAQ/FAQS';
import Numbers from '@/components/page-FAQ/Numbers';

// useHead({
//   script: [{ src: '/assets/js/smoother-script.js', defer: true }],
// });
// onMounted(() => {
//   gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
//   ScrollTrigger.normalizeScroll(true);
//   ScrollSmoother.create({
//     smooth: 2,
//     effects: true,
//   });
// });
</script>
