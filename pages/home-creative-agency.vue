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
        <Intro2 />
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
import Services from '@/components/home-creative-agency/Services';
import Intro from '@/components/home-creative-agency/Intro';
import Numbers from '@/components/home-creative-agency/Numbers';
import Portfolio from '@/components/home-creative-agency/Portfolio';
import Intro2 from '@/components/home-creative-agency/Intro2';
import Team from '@/components/home-creative-agency/Team';
import Testimonials from '@/components/home-creative-agency/Testimonials';
import Clients from '@/components/common/Clients';
import Blog from '@/components/home-creative-agency/Blog';
import Header from '@/components/home-creative-agency/Header';

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
