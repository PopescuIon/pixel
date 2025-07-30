<template>
  <section class="work-card section-padding pb-0">
    <div class="container">
      <div class="sec-head mb-80">
        <div class="d-flex align-items-center">
          <div>
            <span class="sub-title main-color mb-5">Our Portfolio</span>
            <h3 class="fw-600 fz-50 text-u d-rotate wow">
              <span class="rotate-text">
                Selected <span class="fw-200">Works.</span>
              </span>
            </h3>
          </div>
          <div class="ml-auto vi-more">
            <a href="/portfolio-grid" class="butn butn-sm butn-bord radius-30">
              <span>View All</span>
            </a>
            <span class="icon ti-arrow-top-right"></span>
          </div>
        </div>
      </div>
      <div class="cards">
        <div class="card-item sub-bg">
          <div class="row">
            <div class="col-lg-5">
              <div class="cont">
                <div>
                  <div class="mb-15">
                    <a href="/portfolio-grid" class="tag"> Figma </a>
                    <a href="/portfolio-grid" class="tag"> Web Design </a>
                  </div>
                  <h4>Cutter mobile app</h4>
                </div>
                <div>
                  <p>
                    We’re a full stack firm that can help you from strategy to
                    launch, and anywhere in between.
                  </p>
                  <NuxtLink to="/project-details" class="underline mt-15">
  <span class="text main-color sub-title">
    View Details <i class="ti-arrow-top-right"></i>
  </span>
</NuxtLink>
                </div>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="img">
                <img src="/assets/imgs/works/1/1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="card-item sub-bg">
          <div class="row">
            <div class="col-lg-5">
              <div class="cont">
                <div>
                  <div class="mb-15">
                    <a href="/portfolio-grid" class="tag"> Figma </a>
                    <a href="/portfolio-grid" class="tag"> Web Design </a>
                  </div>
                  <h4>Cutter mobile app</h4>
                </div>
                <div>
                  <p>
                    We’re a full stack firm that can help you from strategy to
                    launch, and anywhere in between.
                  </p>
                  <a href="/project-details" class="underline mt-15">
                    <span class="text main-color sub-title">
                      View Details <i class="ti-arrow-top-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="img">
                <img src="/assets/imgs/works/1/2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="card-item sub-bg">
          <div class="row">
            <div class="col-lg-5">
              <div class="cont">
                <div>
                  <div class="mb-15">
                    <a href="/portfolio-grid" class="tag"> Figma </a>
                    <a href="/portfolio-grid" class="tag"> Web Design </a>
                  </div>
                  <h4>Cutter mobile app</h4>
                </div>
                <div>
                  <p>
                    We’re a full stack firm that can help you from strategy to
                    launch, and anywhere in between.
                  </p>
                  <a href="/project-details" class="underline mt-15">
                    <span class="text main-color sub-title">
                      View Details <i class="ti-arrow-top-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="img">
                <img src="/assets/imgs/works/1/3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="card-item sub-bg">
          <div class="row">
            <div class="col-lg-5">
              <div class="cont">
                <div>
                  <div class="mb-15">
                    <a href="/portfolio-grid" class="tag"> Figma </a>
                    <a href="/portfolio-grid" class="tag"> Web Design </a>
                  </div>
                  <h4>Cutter mobile app</h4>
                </div>
                <div>
                  <p>
                    We’re a full stack firm that can help you from strategy to
                    launch, and anywhere in between.
                  </p>
                  <a href="/project-details" class="underline mt-15">
                    <span class="text main-color sub-title">
                      View Details <i class="ti-arrow-top-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="img">
                <img src="/assets/imgs/works/1/4.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="card-item sub-bg">
          <div class="row">
            <div class="col-lg-5">
              <div class="cont">
                <div>
                  <div class="mb-15">
                    <a href="/portfolio-grid" class="tag"> Figma </a>
                    <a href="/portfolio-grid" class="tag"> Web Design </a>
                  </div>
                  <h4>Cutter mobile app</h4>
                </div>
                <div>
                  <p>
                    We’re a full stack firm that can help you from strategy to
                    launch, and anywhere in between.
                  </p>
                  <a href="/project-details" class="underline mt-15">
                    <span class="text main-color sub-title">
                      View Details <i class="ti-arrow-top-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="img">
                <img src="/assets/imgs/works/1/5.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sec-bottom mt-100">
      <div class="main-bg d-flex align-items-center">
        <h6 class="fz-14 fw-400">
          More than <span class="fw-600"> 200+ companies</span>
          trusted us worldwide
        </h6>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
// function Playing() {
//   gsap.registerPlugin(ScrollTrigger);

//   const cards = document.querySelectorAll('.cards .card-item');
//   let stickDistance = 0;

//   const firstCardST = ScrollTrigger.create({
//     trigger: cards[0],
//     start: 'center center',
//   });

//   const lastCardST = ScrollTrigger.create({
//     trigger: cards[cards.length - 1],
//     start: 'bottom bottom',
//   });

//   cards.forEach((card, index) => {
//     const scale = 1 - (cards.length - index) * 0.025;
//     const scaleDown = gsap.to(card, {
//       scale: scale,
//       transformOrigin: '50% ' + (lastCardST.start + stickDistance),
//     });

//     ScrollTrigger.create({
//       trigger: card,
//       start: 'center center',
//       end: () => lastCardST.start + stickDistance,
//       pin: true,
//       pinSpacing: false,
//       ease: 'none',
//       animation: scaleDown,
//       toggleActions: 'restart none none reverse',
//     });
//   });
// }

// onMounted(() => {
//   Playing();
// });

// onUnmounted(() => {
//   ScrollTrigger.getAll().forEach((instance) => instance.kill());
// });
</script>
