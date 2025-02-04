<template>
  <section
    class="work-fade section-padding sub-bg bord-top-grd bord-bottom-grd"
  >
    <div class="container position-re">
      <div class="sec-head mb-80">
        <div class="d-flex align-items-center">
          <div>
            <span class="sub-title main-color mb-5">Our Portfolio</span>
            <h3 class="fw-600 fz-50 text-u d-rotate wow">
              <span class="rotate-text"
                >Selected <span class="fw-200"> Works.</span></span
              >
            </h3>
          </div>
          <div class="ml-auto vi-more">
            <a
              href="/portfolio-gallery"
              class="butn butn-sm butn-bord radius-30"
            >
              <span>View All</span>
            </a>
            <span class="icon ti-arrow-top-right"></span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-2 d-flex align-items-end">
          <div class="text pb-100">
            <p>
              We help our client suceed by creating identities, digital
              experiences, and printmaterials that communicate clearly
            </p>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="work-swiper">
            <Swiper v-bind="swiperOptions" class="swiper-container">
              <SwiperSlide>
                <div class="item">
                  <div class="img">
                    <img
                      src="/assets/imgs/works/1/1.jpg"
                      alt=""
                      class="radius-15"
                    />
                  </div>
                  <div class="cont">
                    <h3>
                      <span class="text sub-bg"
                        >Mails
                        <span class="shap-left-top">
                          <svg
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-11 h-11"
                          >
                            <path
                              d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                              fill="#141414"
                            ></path>
                          </svg>
                        </span>
                        <span class="shap-right-bottom">
                          <svg
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-11 h-11"
                          >
                            <path
                              d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                              fill="#141414"
                            ></path>
                          </svg>
                        </span>
                      </span>
                      <span class="text sub-bg"
                        >Mobile app
                        <span class="shap-left-bottom">
                          <svg
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-11 h-11"
                          >
                            <path
                              d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                              fill="#141414"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="item">
                  <div class="img">
                    <img
                      src="/assets/imgs/works/1/5.jpg"
                      alt=""
                      class="radius-15"
                    />
                  </div>
                  <div class="cont">
                    <h3>
                      <span class="text sub-bg"
                        >Enzsan
                        <span class="shap-left-top">
                          <svg
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-11 h-11"
                          >
                            <path
                              d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                              fill="#141414"
                            ></path>
                          </svg>
                        </span>
                        <span class="shap-right-bottom">
                          <svg
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-11 h-11"
                          >
                            <path
                              d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                              fill="#141414"
                            ></path>
                          </svg>
                        </span>
                      </span>
                      <span class="text sub-bg"
                        >Obertauern
                        <span class="shap-left-bottom">
                          <svg
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-11 h-11"
                          >
                            <path
                              d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                              fill="#141414"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="item">
                  <div class="img">
                    <img
                      src="/assets/imgs/works/1/3.jpg"
                      alt=""
                      class="radius-15"
                    />
                  </div>
                  <div class="cont">
                    <h3>
                      <span class="text sub-bg"
                        >Zumar
                        <span class="shap-left-top">
                          <svg
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-11 h-11"
                          >
                            <path
                              d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                              fill="#141414"
                            ></path>
                          </svg>
                        </span>
                        <span class="shap-right-bottom">
                          <svg
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-11 h-11"
                          >
                            <path
                              d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                              fill="#141414"
                            ></path>
                          </svg>
                        </span>
                      </span>
                      <span class="text sub-bg"
                        >Web Agency
                        <span class="shap-left-bottom">
                          <svg
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-11 h-11"
                          >
                            <path
                              d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                              fill="#141414"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="item">
                  <div class="img">
                    <img
                      src="/assets/imgs/works/1/6.jpg"
                      alt=""
                      class="radius-15"
                    />
                  </div>
                  <div class="cont">
                    <h3>
                      <span class="text sub-bg"
                        >Bono
                        <span class="shap-left-top">
                          <svg
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-11 h-11"
                          >
                            <path
                              d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                              fill="#141414"
                            ></path>
                          </svg>
                        </span>
                        <span class="shap-right-bottom">
                          <svg
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-11 h-11"
                          >
                            <path
                              d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                              fill="#141414"
                            ></path>
                          </svg>
                        </span>
                      </span>
                      <span class="text sub-bg"
                        >Mobile app
                        <span class="shap-left-bottom">
                          <svg
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-11 h-11"
                          >
                            <path
                              d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                              fill="#141414"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="marq-head">
      <div class="main-marq xlrg text-u o-hidden">
        <div class="slide-har st1">
          <div class="box">
            <div v-for="(item, i) in AllMarquess" :key="i" class="item">
              <h4>{{ item }}</h4>
            </div>
          </div>
          <div class="box">
            <div v-for="(item, i) in AllMarquess" :key="i" class="item">
              <h4>{{ item }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

const marquess = ['Our Portfolio'];
const AllMarquess = Array(10).fill(marquess).flat();

const swiperOptions = {
  modules: [Pagination, Navigation],
  slidesPerView: 'auto',
  spaceBetween: 80,
  loop: true,
  touchRatio: 0.2,
  speed: 1500,
  pagination: {
    el: '.work-crev .swiper-pagination',
    clickable: true,
    renderBullet(_, className) {
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

  navigation: {
    nextEl: '.work-crev .swiper-button-next',
    prevEl: '.work-crev .swiper-button-prev',
  },
};
</script>
