<template>
  <section class="page-faqs section-padding pb-0 position-re">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div>
            <div class="sec-head mb-50">
              <h6 class="sub-title main-color mb-15">Why choose us?</h6>
              <h3>
                The creative process behind <br />
                our digital marketing.
              </h3>
            </div>
            <div class="accordion bord">
              <div
                v-for="(item, index) in faqs"
                :key="index"
                :class="{
                  active: index === 0,
                  'item wow fadeInUp': true,
                  animated: true,
                }"
                :data-wow-delay="`${index * 0.2 + 0.1}s`"
              >
                <div class="title" @click="openAccordion">
                  <h6>{{ item.title }}</h6>
                  <span
                    class="ico"
                    :class="{ 'ti-plus': !item.open, 'ti-minus': item.open }"
                  ></span>
                </div>
                <div class="accordion-info">
                  <p>{{ item.content }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="img1">
      <img src="/assets/imgs/intro/03.jpg" alt="" />
    </div>
    <div class="img2">
      <img src="/assets/imgs/arw0.png" alt="" />
    </div>
    <div class="img3">
      <img src="/assets/imgs/intro/04.jpg" alt="" />
    </div>
  </section>
</template>

<script setup>
const faqs = ref([
  {
    title: 'Designing Content With AI Power',
    content:
      'Taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.',
    open: true,
  },
  {
    title: 'Talented, Professional & Expert Team',
    content:
      'Taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.',
    open: false,
  },
  {
    title: 'We Build and Activate Brands',
    content:
      'Taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.',
    open: false,
  },
  {
    title: 'We Build and Activate Brands',
    content:
      'Taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.',
    open: false,
  },
]);

function openAccordion(event) {
  document.querySelectorAll('.accordion-info').forEach((element) => {
    element.classList.remove('active');
    element.style.maxHeight = 0;
    element.parentElement.classList.remove('active');
  });
  event.currentTarget.parentElement.classList.add('active');
  event.currentTarget.nextElementSibling.style.maxHeight = '300px';
  event.currentTarget.nextElementSibling.classList.add('active');
}
</script>

<style scoped>
/* Your component-specific styles go here */
</style>
