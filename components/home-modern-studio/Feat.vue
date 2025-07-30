<template>
  <section class="feat section-padding sub-bg bord-bottom-grd">
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
          <div class="ml-auto vi-more">
            <a href="/page-services" class="butn butn-sm butn-bord radius-30">
              <span>View All</span>
            </a>
            <span class="icon ti-arrow-top-right"></span>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(item, i) in data" :key="{ i }" class="col-lg-3 col-md-6">
          <div class="item-box radius-15 md-mb50">
            <div class="icon-img-70 mb-40 opacity-3">
              <img :src="getImageUrl(item.img)" alt=""  />
            </div>
            <h6 class="mb-25">{{ item.title }}</h6>
            <p>{{ item.desc.slice(0, 50) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import data from '@/data/services';

const baseUrl = useRuntimeConfig().app.baseURL;
const getImageUrl = (imgPath) => {
  return `${baseUrl}${imgPath.replace(/^\/+/, '')}`;
};
</script>
