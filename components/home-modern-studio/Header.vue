<template>
  <header class="modern-slider valign">
    <div class="container position-re">
      <div class="row">
        <div class="col-lg-6 offset-lg-4">
          <div class="gallery-img">
            <Swiper v-bind="swiperGalleryImageOptions" class="swiper-container">
              <SwiperSlide>
                <div
                  class="bg-img"
                  data-background="./assets/imgs/header/s1.jpg"
                  data-overlay-dark="3"
                >
                  <a href="/project-details"></a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  class="bg-img"
                  data-background="./assets/imgs/header/s2.jpg"
                  data-overlay-dark="3"
                >
                  <a href="/project-details"></a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  class="bg-img"
                  data-background="./assets/imgs/header/s3.jpg"
                  data-overlay-dark="3"
                >
                  <a href="/project-details"></a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div class="gallery-text">
        <Swiper
          v-bind="swiperGalleryTextOptions"
          class="swiper-container swiper-container-initialized swiper-container-vertical"
        >
          <SwiperSlide>
            <div class="text">
              <h5 class="main-color mb-15">01</h5>
              <h1>
                Mails <br />
                Mobile app
              </h1>
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
          </SwiperSlide>
          <SwiperSlide>
            <div class="text">
              <h5 class="main-color mb-15">02</h5>
              <h1>
                Mails <br />
                Mobile app
              </h1>
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
          </SwiperSlide>
          <SwiperSlide>
            <div class="text">
              <h5 class="main-color mb-15">03</h5>
              <h1>
                Mails <br />
                Mobile app
              </h1>
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
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="swiper-controls">
        <div class="swiper-button-next swiper-nav-ctrl cursor-pointer">
          <span class="ti-angle-up"></span>
        </div>
        <div class="swiper-button-prev swiper-nav-ctrl cursor-pointer">
          <span class="ti-angle-down"></span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import {
  Navigation,
  EffectFade,
  Keyboard,
  Mousewheel,
  Pagination,
  Thumbs,
} from 'swiper';
import loadBackgroudImages from '@/common/loadBackgroudImages';
onMounted(() => {
  loadBackgroudImages();
});

const galleryImg = ref(null);
const galleryText = ref(null);

const swiperGalleryTextOptions = {
  modules: [Mousewheel, Thumbs, Navigation],

  onSwiper(swiper) {
    galleryText.value = swiper;
  },
  spaceBetween: 30,
  slidesPerView: 1,
  direction: 'vertical',
  loop: true,
  loopedSlides: 4,
  touchRatio: 0.2,
  slideToClickedSlide: true,
  // mousewheel: true,
  speed: 1500,
  navigation: {
    nextEl: '.modern-slider .swiper-controls .swiper-button-next',
    prevEl: '.modern-slider .swiper-controls .swiper-button-prev',
  },
  thumbs: {
    swiper: galleryImg.value,
  },
};

const swiperGalleryImageOptions = {
  modules: [Navigation, Keyboard, Mousewheel, Pagination, Thumbs, EffectFade],
  onSwiper(swiper) {
    galleryImg.value = swiper;
  },
  spaceBetween: 0,
  slidesPerView: 1,
  effect: 'fade',
  effectfade: {
    crossFade: true,
  },
  loop: true,
  loopedSlides: 4,
  mousewheel: true,
  speed: 1500,
  navigation: {
    nextEl: ' .swiper-controls .swiper-button-next',
    prevEl: ' .swiper-controls .swiper-button-prev',
  },
  pagination: {
    el: '.modern-slider .swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '">' +
        '<svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16">' +
        '<circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#FFF"' +
        'stroke-opacity="1" stroke-width="1px"></circle>' +
        '<circle cx="8" cy="8" r="3" fill="#FFF"></circle>' +
        '</svg></span>'
      );
    },
  },
  keyboard: {
    enabled: true,
  },
  thumbs: {
    swiper: galleryText.value,
  },
};

watch([galleryImg, galleryText], () => {
  if (galleryImg.value && galleryText.value) {
    galleryImg.value.on('slideChangeTransitionStart', function () {
      galleryText.value.slideTo(galleryImg.value.activeIndex);
    });
    galleryText.value.on('transitionStart', function () {
      galleryImg.value.slideTo(galleryText.value.activeIndex);
    });
  }
});
</script>
