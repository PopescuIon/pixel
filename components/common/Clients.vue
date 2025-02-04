<template>
  <section class="clients-carso in-circle section-padding">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-10">
          <div class="sec-head text-center mb-80">
            <h3>
              We&apos;re proud to work with <br />
              a
              <span class="opacity-7">diverse range of companies.</span>
            </h3>
          </div>
        </div>
      </div>
      <div
        class="swiper5"
        data-carousel="swiper"
        data-items="5"
        data-loop="true"
        data-space="40"
      >
        <Swiper
          v-bind="swiperOptions"
          id="content-carousel-container-unq-clients"
          class="swiper-container"
          data-swiper="container"
        >
          <SwiperSlide>
            <div class="item">
              <div class="img icon-img-100">
                <img src="/assets/imgs/brands/c1.svg" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="item">
              <div class="img icon-img-100">
                <img src="/assets/imgs/brands/c2.svg" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="item">
              <div class="img icon-img-100">
                <img src="/assets/imgs/brands/c3.svg" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="item">
              <div class="img icon-img-100">
                <img src="/assets/imgs/brands/c4.svg" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="item">
              <div class="img icon-img-100">
                <img src="/assets/imgs/brands/c5.svg" alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="sec-bottom mt-100">
        <div class="main-bg d-flex align-items-center">
          <h6 class="fz-14 fw-400">
            More than <span class="fw-400"> 200+ companies</span>
            trusted us worldwide
          </h6>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
const swiperOptions = {
  speed: 600,
  slidesPerView: 5,
  loop: true,
  spaceBetween: 40,
  centeredSlides: false,

  breakpoints: {
    // when window width is >= 640px
    640: {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
    },
    // when window width is >= 768px
    600: {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: false,
    },
    // when window width is >= 1200px
    1200: {
      loop: true,
      slidesPerView: 5,
      spaceBetween: 40,
      centeredSlides: false,
    },
  },
};
</script>
