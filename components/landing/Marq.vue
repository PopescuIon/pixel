<template>
  <section
    class="main-img d-flex align-items-end bg-img overlay-center"
    data-background="/assets/imgs/background/b1.jpg"
    data-overlay-dark="8"
  >
    <div class="marq-head ontop">
      <div class="main-marq xlrg text-u o-hidden">
        <div class="slide-har st1">
          <div class="box">
            <div v-for="(item, i) in allMarquess" :key="i" class="item">
              <h4>{{ item }}</h4>
            </div>
          </div>
          <div class="box">
            <div v-for="(item, i) in allMarquess" :key="i" class="item">
              <h4>{{ item }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const marquess = ['Free Lifetime Updates', 'Free Support'];
const allMarquess = Array(5).fill(marquess).flat();
import loadBackgroudImages from '@/common/loadBackgroudImages';
onMounted(() => {
  loadBackgroudImages();
});
</script>
