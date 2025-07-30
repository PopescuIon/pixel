<template>
  <section class="feat section-padding">
    <div class="container ontop">
      <div class="row">
        <div class="col-lg-5">
          <div class="cont md-mb50">
            <h6 class="sub-title main-color mb-15">Trusted Services</h6>
            <h3 class="mb-30">
              The service we offer is specifically designed to meet your needs.
            </h3>
            <p>
              Driven professional dedicated to making a lasting impact through
              innovative solutions and unwavering excellence.
            </p>
            <a
              href="/page-about"
              class="butn-crev d-flex align-items-center mt-40"
            >
              <span class="hover-this">
                <span class="circle hover-anim">
                  <i class="ti-arrow-top-right"></i>
                </span>
              </span>
              <span class="text">Learn more</span>
            </a>
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1">
          <div class="item mb-30">
            <div class="row">
              <div
                class="col-md-4 bg-img"
                data-background="/assets/imgs/serv-img/1.jpg"
              ></div>
              <div class="col-md-8">
                <div class="info">
                  <h5 class="mb-15">Web Design</h5>
                  <p>
                    This is the main factor that sets us apart from our
                    competition and allows us .
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="item mb-30">
            <div class="row">
              <div
                class="col-md-4 bg-img"
                data-background="/assets/imgs/serv-img/2.jpg"
              ></div>
              <div class="col-md-8">
                <div class="info">
                  <h5 class="mb-15">Branding</h5>
                  <p>
                    This is the main factor that sets us apart from our
                    competition and allows us .
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="row">
              <div
                class="col-md-4 bg-img"
                data-background="/assets/imgs/serv-img/3.jpg"
              ></div>
              <div class="col-md-8">
                <div class="info">
                  <h5 class="mb-15">Marketing</h5>
                  <p>
                    This is the main factor that sets us apart from our
                    competition and allows us .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="circle-blur">
      <img src="/assets/imgs/patterns/blur1.png" alt="" />
    </div>
  </section>
</template>
<script setup>
import loadBackgroudImages from '@/common/loadBackgroudImages';
onMounted(() => {
  loadBackgroudImages();
});
</script>
