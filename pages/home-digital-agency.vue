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
        <Services />
        <Intro2 />
        <Numbers />
        <Portfolio />
        <Feat />
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
import Clients from '@/components/common/Clients';
import Marq2 from '@/components/common/Marq2';
import Header from '@/components/home-digital-agency/Header';
import Services from '@/components/home-digital-agency/Services';
import Intro2 from '@/components/home-digital-agency/Intro2';
import Numbers from '@/components/home-digital-agency/Numbers';
import Portfolio from '@/components/home-digital-agency/Portfolio';
import Feat from '@/components/home-digital-agency/Feat';
import Testimonials from '@/components/home-digital-agency/Testimonials';
import Blog from '@/components/home-digital-agency/Blog';

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
