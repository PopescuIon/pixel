<template>
  <section class="team-crev section-padding">
    <div class="container">
      <div class="sec-head mb-80">
        <div class="d-flex align-items-center mb-30">
          <h2 class="fw-600 fz-70 text-u d-rotate wow">
            <span class="rotate-text">
              Meet our <span class="fw-200">legends</span>
            </span>
          </h2>
          <div class="ml-auto vi-more">
            <a href="/page-team" class="butn butn-sm butn-bord radius-30">
              <span>Join to us</span>
            </a>
            <span class="icon ti-arrow-top-right"></span>
          </div>
        </div>
        <h6 class="sub-title main-color d-flex align-items-center">
          <span>Our Team</span>
          <span class="thin"></span>
        </h6>
      </div>
      <div class="row">
        <div
          v-for="item in data.slice(0, 4)"
          :key="{ i }"
          class="col-lg-3 col-md-6"
        >
          <div class="item md-mb50">
            <div class="cont text-center pt-30 pb-30">
              <div class="info">
                <h6>{{ item.name }}</h6>
                <span class="fz-14 p-color mt-10">{{ item.subName }}</span>
              </div>
              <div class="social mt-20">
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
            <div class="img">
              <img :src="item.img" alt="" />
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
import data from '@/data/team-t';
</script>
