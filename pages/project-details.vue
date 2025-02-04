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
        <Challenge />
        <Works />
        <Solution />
        <Wroks2 />
        <Next />
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
import Header from '@/components/project-details/Header';
import Challenge from '@/components/project-details/Challenge';
import Works from '@/components/project-details/Works';
import Solution from '@/components/project-details/Solution';
import Wroks2 from '@/components/project-details/Wroks2';
import Next from '@/components/project-details/Next';
// onMounted(() => {
//   const script = document.createElement('script');
//   script.type = 'text/javascript';
//   script.src = '/assets/js/scripts.js';
//   document.body.appendChild(script);
// });
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
