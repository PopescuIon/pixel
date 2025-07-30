<template>
  <header
    class="page-header bg-img section-padding valign"
    data-background="assets/imgs/background/bg4.jpg"
    data-overlay-dark="8"
  >
    <div class="container pt-80">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <h1 class="text-u ls1 fz-80">
              Freq<span class="fw-200">uency</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import loadBackgroudImages from '@/common/loadBackgroudImages';
onMounted(() => {
  loadBackgroudImages();
});
</script>
