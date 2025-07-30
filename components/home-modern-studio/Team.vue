<template>
  <section class="team-crev2 section-padding pb-90">
    <div class="container">
      <div class="sec-head mb-80">
        <div class="d-flex align-items-center">
          <div>
            <span class="sub-title main-color mb-5">Our Team</span>
            <h3 class="fw-600 fz-50 text-u d-rotate wow">
              <span class="rotate-text">
                Meet our <span class="fw-200">legends.</span>
              </span>
            </h3>
          </div>
          <div class="ml-auto vi-more">
            <a href="/page-team" class="butn butn-sm butn-bord radius-30">
              <span>Join to us</span>
            </a>
            <span class="icon ti-arrow-top-right"></span>
          </div>
        </div>
      </div>
      <div class="row md-marg">
        <div v-for="(item, i) in data" :key="{ i }" class="col-lg-3 col-md-6">
          <div class="item mb-50">
            <div class="bg-blur">
              <div class="img">
                <img :src="getImageUrl(item.img)" alt=""  />
                <div class="social">
                  <div class="links">
                    <a href="#0">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#0">
                      <i class="fab fa-behance"></i>
                    </a>
                    <a href="#0">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="circle-blur">
                <img src="/assets/imgs/patterns/blur1.png" alt="" />
              </div>
            </div>
            <div class="cont pt-30">
              <div class="info">
                <h6>{{ item.name }}</h6>
                <span class="fz-14 p-color mt-10">{{ item.subName }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div
            class="item-bord d-flex align-items-center justify-content-center mb-50"
          >
            <div>
              <h5>
                Become <br />
                Our Member
              </h5>
              <a href="#0" class="mt-30">
                <span class="ti-arrow-top-right fz-30"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="circle-blur">
      <img src="/assets/imgs/patterns/blur1.png" alt="" />
    </div>
  </section>
</template>

<script setup>
import data from '@/data/team-t';

const baseUrl = useRuntimeConfig().app.baseURL;
const getImageUrl = (imgPath) => {
  return `${baseUrl}${imgPath.replace(/^\/+/, '')}`;
};
</script>
