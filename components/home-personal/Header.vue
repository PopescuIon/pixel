<template>
  <div
    class="header header-personal valign bg-img"
    data-background="/assets/imgs/header/p0.jpg"
    data-overlay-dark="2"
  >
    <div class="container ontop">
      <div class="row">
        <div class="col-lg-7">
          <div class="caption">
            <h6 class="mb-15">
              <span class="icon-img-30 mr-10">
                <img src="/assets/imgs/header/hi.png" alt="" />
              </span>
              Hello! there
            </h6>
            <h1 class="fw-700 mb-10">
              I&apos;m Oliver <span class="main-color">Jackson</span>
            </h1>
            <h3>I am a product designer</h3>
            <div class="row">
              <div class="col-lg-9">
                <div class="text mt-30">
                  <p>
                    From the inception of a project to its completion, we employ
                    a comprehensive and holistic approach.
                  </p>
                </div>
                <div class="d-flex align-items-center mt-60">
                  <a
                    href="/page-contact"
                    class="butn butn-md butn-bord radius-30"
                  >
                    <span class="text">Contact Me</span>
                  </a>
                  <div class="icon-img-60 ml-20">
                    <img
                      src="/assets/imgs/icon-img/arrow-down-big.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="info d-flex align-items-center justify-content-end mt-100">
        <div class="item">
          <h6 class="sub-title mb-10">Email :</h6>
          <span class="p-color">Webfolio.Info@gmail.com</span>
        </div>
        <div class="item">
          <h6 class="sub-title mb-10">Phone :</h6>
          <span class="p-color">+2 456 (343) 24 45</span>
        </div>
        <div class="item">
          <h6 class="sub-title mb-10">Address :</h6>
          <span class="p-color">5919 Trussville Pkwy, Birmingham</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import loadBackgroudImages from '@/common/loadBackgroudImages';
onMounted(() => {
  loadBackgroudImages();
});
</script>
