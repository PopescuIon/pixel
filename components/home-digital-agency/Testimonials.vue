<template>
  <section class="testimonials">
    <div class="container section-padding bord-bottom-grd">
      <div class="row">
        <div class="col-lg-4 md-mb50">
          <div class="img-full">
            <div class="fit-img">
              <img src="/assets/imgs/testim/bg.jpg" alt="" />
            </div>
            <div class="fix-img">
              <img src="/assets/imgs/arw1.png" alt="" />
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="cont-full">
            <div
              class="testim-swiper"
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
                    <div class="content">
                      <div class="text">
                        <p class="fz-30">
                          I have been hiring people in this space for a number
                          of years and I have never seen this level of
                          professionalism. It really feels like you are working
                          with a team that can get the job done.
                        </p>
                      </div>
                      <div
                        class="info d-flex align-items-center pt-40 mt-40 bord-thin-top"
                      >
                        <div>
                          <div class="fit-img circle">
                            <img src="/assets/imgs/testim/t1.jpg" alt="" />
                          </div>
                        </div>
                        <div class="ml-20">
                          <h5>Adam Beckley</h5>
                          <span class="sub-title main-color">
                            Founder & CEO
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide class="swiper-slide">
                  <div class="item">
                    <div class="content">
                      <div class="text">
                        <p class="fz-30">
                          I have been hiring people in this space for a number
                          of years and I have never seen this level of
                          professionalism. It really feels like you are working
                          with a team that can get the job done.
                        </p>
                      </div>
                      <div
                        class="info d-flex align-items-center pt-40 mt-40 bord-thin-top"
                      >
                        <div>
                          <div class="fit-img circle">
                            <img src="/assets/imgs/testim/t2.jpg" alt="" />
                          </div>
                        </div>
                        <div class="ml-20">
                          <h5>Adam Beckley</h5>
                          <span class="sub-title main-color">
                            Founder & CEO
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="256.721"
                height="208.227"
                viewBox="0 0 256.721 208.227"
                class="qout-svg"
              >
                <path
                  data-name="Path"
                  d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z"
                  transform="translate(121.55 640.568)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1"
                  opacity="0.322"
                ></path>
              </svg>
            </div>
            <div class="swiper-arrow-control control-abslout">
              <div class="swiper-button-prev">
                <span class="ti-arrow-left"></span>
              </div>
              <div class="swiper-button-next">
                <span class="ti-arrow-right"></span>
              </div>
            </div>
            <div class="circle-blur">
              <img src="/assets/imgs/patterns/blur1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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
  },
};
</script>
