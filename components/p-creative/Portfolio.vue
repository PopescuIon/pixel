<template>
  <section class="portfolio-crev valign pt-80">
    <div class="container-fluid rest">
      <div class="work-boxs">
        <div
          v-for="(item, i) in data"
          :key="i"
          @click="handleActiveWork"
          :class="{ item: true, active: i === 0 }"
        >
          <div class="bg-img" :data-background="item.img">
            <div class="cont main-bg">
              <div class="d-flex align-items-center">
                <div>
                  <h5>{{ item.title }} {{ item.subTitle }}</h5>
                  <span class="p-color mt-5">Branding</span>
                </div>
                <div class="ml-auto">
                  <a href="/project-details" class="arrow">
                    <img
                      src="/assets/imgs/icon-img/arrow-down-big.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import data from '@/data/portfolios/works1';
import loadBackgroudImages from '@/common/loadBackgroudImages';
onMounted(() => {
  loadBackgroudImages();
});
function handleActiveWork(event) {
  document.querySelectorAll('.work-boxs .item').forEach((serv) => {
    serv.classList.remove('active');
  });
  event.currentTarget.classList.add('active');
}
</script>
