<template>
  <section class="services-crev section-padding">
    <div class="container">
      <div class="sec-head mb-80">
        <div class="mb-30">
          <h2 class="fw-600 fz-70 text-u d-rotate wow">
            <span class="rotate-text">
              Featured <span class="fw-200">Services.</span>
            </span>
          </h2>
        </div>
        <h6 class="sub-title main-color d-flex align-items-center">
          <span>Our Specialize</span>
          <span class="thin"></span>
        </h6>
      </div>
      <div class="row sm-marg">
        <div v-for="(item, i) in data" :key="i" class="col-lg-3 col-md-6">
          <div class="item-box radius-15 md-mb30">
            <h5 class="mb-80 text-u">
              <span class="mr-40 fz-14 main-color">01</span>
              {{ item.title }}
            </h5>
            <div class="icon mb-20 opacity-5">
              <img :src="item.img" alt="" />
            </div>
            <p>{{ item.desc.slice(0, 50) }}</p>
          </div>
        </div>
      </div>
      <div class="sec-bottom mt-100">
        <div class="main-bg d-flex align-items-center">
          <p>Here are some select projects that showcase.</p>
          <nuxt-link
            to="/page-services"
            class="butn main-color ml-40 underline"
          >
            <span>View All</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import data from '@/data/services';
</script>
