<template>
  <section class="numbers-crev section-padding o-hidden">
    <div class="container">
      <div class="row lg-marg justify-content-center">
        <div
          v-for="(item, index) in numbers"
          :key="index"
          class="col-lg-4 col-md-6"
        >
          <div class="item text-center" :class="{ 'md-mb50': index < 2 }">
            <div class="o-hidden">
              <h3 class="stroke">{{ item.value }}</h3>
            </div>
            <h6 class="p-color sub-title">{{ item.subtitle }}</h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const numbers = [
  { value: '100%', subtitle: 'Clients Satisfaction' },
  { value: '6700', subtitle: 'Projects Completed' },
  { value: '34 +', subtitle: 'Awards Achievement' },
];
</script>
