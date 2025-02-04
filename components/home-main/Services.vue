<template>
  <section class="services section-padding">
    <div class="container">
      <div class="sec-head mb-80">
        <div class="d-flex align-items-center">
          <div>
            <span class="sub-title main-color mb-5">Our Specialize</span>
            <h3 class="fw-600 fz-50 text-u d-rotate wow">
              <span class="rotate-text">
                Featured <span class="fw-200">Services.</span>
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
      <div
        class="serv-swiper"
        data-carousel="swiper"
        data-loop="true"
        data-space="40"
      >
        <Swiper
          v-bind="swiperOptions"
          id="content-carousel-container-unq-serv"
          class="swiper-container"
          data-swiper="container"
        >
          <SwiperSlide v-for="(item, i) in data" :key="i" class="swiper-slide">
            <div class="item-box">
              <div class="icon mb-40 opacity-5">
                <img :src="item.img" alt="" />
              </div>
              <h5 class="mb-15">{{ item.title }}</h5>
              <p>{{ item.desc }}</p>
              <nuxt-link :to="item.link" class="rmore mt-30">
                <span class="sub-title">Read More</span>
                <img
                  src="/assets/imgs/arrow-right.png"
                  alt=""
                  class="icon-img-20 ml-5"
                />
              </nuxt-link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import data from '@/data/services';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';
const swiperOptions = {
  modules: [Navigation, Pagination],
  // centeredSlides: true,
  loop: true,
  speed: 1000,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: ' .swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
  },
};
</script>
