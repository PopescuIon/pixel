<template>
  <section class="marq">
    <div class="main-marq lrg sub-bg pt-20 pb-20 shadow-off">
      <div class="slide-har st1">
        <div class="box">
          <div v-for="item in items" :key="{ i }" class="item">
            <h4 class="d-flex align-items-center">
              <span>{{ item }}</span>
              <span class="icon-img-50 ml-40">
                <img src="/assets/imgs/star.png" alt="" />
              </span>
            </h4>
          </div>
        </div>
        <div class="box">
          <div v-for="item in items" :key="{ i }" class="item">
            <h4 class="d-flex align-items-center">
              <span>{{ item }}</span>
              <span class="icon-img-50 ml-40">
                <img src="/assets/imgs/star.png" alt="" />
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const items = [
  'Web Design',
  'ArtDirector',
  'Brand Strategy',
  'UI/UX Design',
  'Digital Marketing',
  'WebDevelopement',
  'Seo Mackting',
  'Product Desgin',
];
</script>
