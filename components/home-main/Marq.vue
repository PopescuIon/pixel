<template>
  <section class="opacity-7">
    <div class="main-marq xlrg o-hidden">
      <div class="slide-har st1 strok">
        <div class="box">
          <div v-for="(item, i) in marquee" :key="i" class="item">
            <h4 class="d-flex align-items-center">
              <span>{{ item }}</span>
              <span class="icon-img-50 ml-40">
                <img src="/assets/imgs/star.png" alt="" />
              </span>
            </h4>
          </div>
        </div>
        <div class="box">
          <div v-for="(item, i) in marquee" :key="i" class="item">
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
    <div class="main-marq xlrg o-hidden">
      <div class="slide-har st2 non-strok">
        <div class="box">
          <div v-for="(item, i) in marquee" :key="i" class="item">
            <h4 class="d-flex align-items-center">
              <span>{{ item }}</span>
              <span class="icon-img-50 ml-40">
                <img src="/assets/imgs/star.png" alt="" />
              </span>
            </h4>
          </div>
        </div>
        <div class="box">
          <div v-for="(item, i) in marquee" :key="i" class="item">
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
const marquee = [
  'Web Design',
  'Web Development',
  'Seo eCommerce',
  'Digital Marketing',
  'UI/UX Design',
];
</script>
