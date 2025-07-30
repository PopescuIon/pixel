<template>
  <footer
    class="section-padding bg-img valign"
    data-background="/landing-preview/img/bg.jpg"
    data-overlay-dark="7"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="text-center">
            <h6 class="sub-title main-color">We Have Offer For You!</h6>
            <h2>Download Your Copy of Webfolio Now!</h2>
            <div class="text mt-15">
              <p class="fz-22">
                One-time payment & get free lifetime license and update
                <br />
                Get all Features, options, templates & Demos!
              </p>
            </div>
            <a
              href="#0"
              class="butn butn-md butn-bg radius-30 main-colorbg mt-40"
            >
              <span class="text">Purchase Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="img-footer bg-img"
      data-background="/landing-preview/img/bg-f.png"
    ></div>
  </footer>
</template>

<script setup>
import loadBackgroudImages from '@/common/loadBackgroudImages';
onMounted(() => {
  loadBackgroudImages();
});
</script>
