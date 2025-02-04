<template>
  <section class="work-crev section-padding">
    <div class="container position-re pb-80">
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
      </div>
      <div class="work-swiper out-right">
        <Swiper loop v-bind="swiperOptions">
          <SwiperSlide v-for="(item, i) in data" :key="i" class="swiper-slide">
            <div class="item d-flex align-items-center">
              <div class="cont">
                <h6 class="sub-title main-color mb-15">UI/UX Design</h6>
                <h2>
                  {{ item.title }} <br />
                  {{ item.subTitle }}
                </h2>
                <a
                  href="/project-details"
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
import data from '../../data/portfolios/works1.json';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';
const swiperOptions = {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  loop: true,
  speed: 1000,
  centeredSlides: false,
  spaceBetween: 30,
  navigation: {
    nextEl: '.testimonials .swiper-button-next',
    prevEl: '.testimonials .swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
};
</script>
