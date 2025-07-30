<template>
  <section class="services-modern section-padding">
    <div class="container">
      <div class="sec-head mb-80">
        <div class="row">
          <div class="col-lg-4">
            <h6 class="title-bord mb-30">Our Services</h6>
          </div>
          <div class="col-lg-8">
            <div class="text">
              <h4>
                From the inception of a project to its completion, we employ a
                comprehensive and holistic approach that ensures all aspects and
                stages are thoughtfully and thoroughly addressed.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid rest">
      <div class="serv-boxs">
        <div
          v-for="(item, i) in data"
          :key="i"
          @click="handleActiveSer"
          :class="{ item: true, active: i === 0 }"
        >
          <div class="icon-img-60"> 
            <img :src="getImageUrl(item.img)" alt=""  />
          </div>
          <div>
            <div class="text mb-30">
              <p>{{ item.desc }}</p>
            </div>
            <div class="d-flex align-items-center">
              <h6 class="sub-title">{{ item.title }}</h6>
              <span class="ml-auto fz-13">{{ `0${i + 1}` }}</span>
            </div>
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
function handleActiveSer(event) {
  document.querySelectorAll('.serv-boxs .item').forEach((serv) => {
    serv.classList.remove('active');
  });
  event.currentTarget.classList.add('active');
}
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
