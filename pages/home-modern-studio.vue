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
        <Intro />
        <Numbers />
        <Portfolio />
        <Feat />
        <Team />
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
import Blog from '@/components/home-main/Blog';
import Header from '@/components/home-modern-studio/Header';
import Services from '@/components/home-modern-studio/Services';
import Intro from '@/components/home-modern-studio/Intro';
import Numbers from '@/components/home-modern-studio/Numbers';
import Portfolio from '@/components/home-modern-studio/Portfolio';
import Feat from '@/components/home-modern-studio/Feat';
import Clients from '@/components/common/Clients';
import Team from '@/components/home-modern-studio/Team';
import Testimonials from '@/components/home-modern-studio/Testimonials';

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
