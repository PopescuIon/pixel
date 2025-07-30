<template>
  <section
    class="testim-modern section-padding sub-bg bord-top-grd bord-bottom-grd"
  >
    <div class="container">
      <div class="sec-head mb-80">
        <div class="d-flex align-items-center">
          <div>
            <span class="sub-title main-color mb-5">Testimonials</span>
            <h3 class="fw-600 fz-50 text-u d-rotate wow">
              <span class="rotate-text">
                Trusted <span class="fw-200">by Clients.</span>
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
        class="testim-swiper3 out-right"
        data-carousel="swiper"
        data-loop="true"
        data-space="30"
      >
        <Swiper
          loop
          v-bind="swiperOptions"
          id="content-carousel-container-unq-testim"
          class="swiper-container"
          data-swiper="container"
        >
          <SwiperSlide class="swiper-slide">
            <div class="item">
              <div class="cont">
                <h6 class="sub-title mb-15">Design Quality</h6>
                <div class="text">
                  <p>
                    “ I have been hiring people in this space for a number of
                    years and I have never seen this level of professionalism.”
                  </p>
                </div>
              </div>
              <div class="info">
                <div class="d-flex align-items-center">
                  <div>
                    <div class="img fit-img">
                      <img src="/assets/imgs/testim/t1.jpg" alt="" />
                    </div>
                  </div>
                  <div class="ml-20">
                    <h6 class="fz-18">Haitham Al-Dukhin</h6>
                    <span class="p-color opacity-8 fz-15 mt-5">
                      Envato Customer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <div class="item">
              <div class="cont">
                <h6 class="sub-title mb-15">Design Quality</h6>
                <div class="text">
                  <p>
                    “ I have been hiring people in this space for a number of
                    years and I have never seen this level of professionalism. ”
                  </p>
                </div>
              </div>
              <div class="info">
                <div class="d-flex align-items-center">
                  <div>
                    <div class="img fit-img">
                      <img src="/assets/imgs/testim/t2.jpg" alt="" />
                    </div>
                  </div>
                  <div class="ml-20">
                    <h6 class="fz-18">Haitham Al-Dukhin</h6>
                    <span class="p-color opacity-8 fz-15 mt-5">
                      Envato Customer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <div class="item">
              <div class="cont">
                <h6 class="sub-title mb-15">Design Quality</h6>
                <div class="text">
                  <p>
                    “ I have been hiring people in this space for a number of
                    years and I have never seen this level of professionalism. ”
                  </p>
                </div>
              </div>
              <div class="info">
                <div class="d-flex align-items-center">
                  <div>
                    <div class="img fit-img">
                      <img src="/assets/imgs/testim/t3.jpg" alt="" />
                    </div>
                  </div>
                  <div class="ml-20">
                    <h6 class="fz-18">Haitham Al-Dukhin</h6>
                    <span class="p-color opacity-8 fz-15 mt-5">
                      Envato Customer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';
const swiperOptions = {
  modules: [Navigation, Pagination],
  slidesPerView: 'auto',
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
  },
};
</script>
