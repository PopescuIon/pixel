<template>
  <section class="work-crev sub-bg">
    <div class="container section-padding position-re">
      <div class="sec-head mb-80">
        <div class="d-flex align-items-center mb-30">
          <h2 class="fw-600 fz-70 text-u d-rotate wow">
            <span class="rotate-text">
              Selected <span class="fw-200">Works.</span>
            </span>
          </h2>
          <div class="ml-auto">
            <div class="swiper-arrow-control">
              <div class="swiper-button-prev">
                <span class="ti-arrow-left"></span>
              </div>
              <div class="swiper-button-next">
                <span class="ti-arrow-right"></span>
              </div>
            </div>
          </div>
        </div>
        <h6 class="sub-title main-color d-flex align-items-center">
          <span>Our Portfolio</span>
          <span class="thin"></span>
        </h6>
      </div>
      <div class="work-swiper out-right">
        <Swiper loop v-bind="swiperOptions">
          <SwiperSlide v-for="(item, i) in data" :key="i">
            <div class="item d-flex align-items-center">
              <div class="cont">
                <h6 class="sub-title main-color mb-15">UI/UX Design</h6>
                <h2>
                  {{ item.title }} <br />
                  {{ item.subTitle }}
                </h2>
                <a
                  to="/project-details"
                  class="butn-crev d-flex align-items-center mt-30"
                >
                  <span class="hover-this">
                    <span class="circle hover-anim">
                      <i class="ti-arrow-top-right"></i>
                    </span>
                  </span>
                  <span class="text">View Project</span>
                </a>
              </div>
              <div class="img">
                <img :src="item.img" alt="" class="radius-15" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import data from '@/data/portfolios/works1';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';
const swiperOptions = {
  modules: [Navigation, Pagination],
  centeredSlides: true,
  spaceBetween: 80,
  slidesPerView: 1,
  loop: true,
  speed: 1000,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  renderProgressbar: function (progressbarFillClass) {
    return (
      '<span class="swiper-pagination-progressbar-fill" style="transform: translate3d(0px, 0px, 0px) scaleX(0.5) scaleY(1); transition-duration: 1500ms;">' +
      progressbarFillClass +
      '"></span>'
    );
  },

  pagination: {
    type: 'progressbar',
    el: '.swiper-pagination',
    clickable: true,
  },
};
</script>
<style>
.work-crev .swiper-pagination .swiper-pagination-progressbar-fill {
  background: #fff;
}
</style>
