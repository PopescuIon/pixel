<template>
  <header
    class="header pre-header bg-img valign"
    data-background="/landing-preview/img/bg.jpg"
    data-overlay-dark="7"
  >
    <div class="container ontop">
      <div class="row mb-40">
        <div class="col-lg-8 valign">
          <div class="caption">
            <h1>
              The Ultimate
              <span class="fw-200">Creative Portfolio</span> Nuxtjs Template is
              Here
            </h1>
          </div>
        </div>
      </div>
      <h2>Webfolio</h2>
    </div>
    <div
      class="img-header bg-img"
      data-background="/landing-preview/img/head.png"
    ></div>
  </header>
</template>
<script setup>
import loadBackgroudImages from '@/common/loadBackgroudImages';
onMounted(() => {
  loadBackgroudImages();
});
</script>
