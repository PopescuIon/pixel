<template>
  <section class="call-marq section-padding o-hidden">
    <div class="main-marq lrg sub-bg pt-20 pb-20">
      <div class="slide-har st1">
        <div class="box">
          <div v-for="(item, i) in AllMarquess" :key="i" class="item">
            <h4 class="d-flex align-items-center">
              <span>{{ item }}</span>
              <span class="icon-img-50 ml-40">
                <img src="/assets/imgs/star.png" alt="" />
              </span>
            </h4>
          </div>
          <div v-for="(item, i) in AllMarquess" :key="i" class="item">
            <h4 class="d-flex align-items-center">
              <span>{{ item }}</span>
              <span class="icon-img-50 ml-40">
                <img src="/assets/imgs/star.png" alt="" />
              </span>
            </h4>
          </div>
        </div>

        <nuxt-link to="/page-contact" class="overlay-link"></nuxt-link>
      </div>
    </div>
    <div class="main-marq bord-item">
      <div class="slide-har st2">
        <div class="box">
          <div v-for="(item, i) in AllContact" :key="i" class="item">
            <h4 class="d-flex align-items-center">
              <span>{{ item }}</span>
            </h4>
          </div>
        </div>
        <div class="box">
          <div v-for="(item, i) in AllContact" :key="i" class="item">
            <h4 class="d-flex align-items-center">
              <span>{{ item }}</span>
            </h4>
          </div>
        </div>

        <nuxt-link to="/page-contact" class="overlay-link"></nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup>
const marquess = ['Get In Touch'];
const AllMarquess = Array(6).fill(marquess).flat();
const contact = ['Contact Us'];
const AllContact = Array(6).fill(contact).flat();
</script>

<style scoped>
/* Your component-specific styles go here */
</style>
