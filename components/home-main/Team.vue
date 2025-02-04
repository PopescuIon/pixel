<template>
  <section class="team section-padding pt-0">
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
            <nuxt-link to="/page-team" class="butn butn-sm butn-bord radius-30">
              <span>Join to us</span>
            </nuxt-link>
            <span class="icon ti-arrow-top-right"></span>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(item, i) in data" :key="i" class="col-lg-4">
          <div class="item md-mb50">
            <div class="img">
              <img :src="item.img" alt="" />
              <div class="info">
                <span class="fz-12">{{ item.subName }}</span>
                <h6 class="fz-18">{{ item.name }}</h6>
              </div>
            </div>
            <div class="social">
              <div class="links">
                <a :href="`#${item.facebookLink}`">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a :href="`#${item.behanceLink}`">
                  <i class="fab fa-behance"></i>
                </a>
                <a :href="`#${item.instagramLink}`">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import data from '@/data/team';
</script>
