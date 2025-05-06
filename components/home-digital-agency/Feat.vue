<template>
  <section class="feat sub-bg">
    <div class="container section-padding bord-top-grd">
      <div class="sec-head mb-80">
        <div class="d-flex align-items-center">
          <div>
            <span class="sub-title main-color mb-5">Our Specialize</span>
            <h3 class="fw-600 fz-50 text-u d-rotate wow">
              <span class="rotate-text">
                Featured <span class="fw-200">Services.</span>
              </span>
            </h3>
          </div>
          <div class="ml-auto vi-more">
            <a href="/page-services" class="butn butn-sm butn-bord radius-30">
              <span>View All</span>
            </a>
            <span class="icon ti-arrow-top-right"></span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <div class="item-box radius-15 md-mb50">
            <div class="icon-img-70 mb-40 opacity-3">
              <img src="/assets/imgs/serv-icons/3.png" alt="" />
            </div>
            <span class="mb-30 p-color">01 .</span>
            <h6 class="mb-20">Digital Product Design</h6>
            <p>
              Live workshop where we define the main problems and challenge.
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="item-box radius-15 md-mb50">
            <div class="icon-img-70 mb-40 opacity-3">
              <img src="/assets/imgs/serv-icons/4.png" alt="" />
            </div>
            <span class="mb-30 p-color">02 .</span>
            <h6 class="mb-20">Web Developments</h6>
            <p>
              Live workshop where we define the main problems and challenge.
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="item-box radius-15 sm-mb50">
            <div class="icon-img-70 mb-40 opacity-3">
             
              <img :src="require('./assets/imgs/serv-icons/5.png')" alt="Service Icon">
            </div>
            <span class="mb-30 p-color">03 .</span>
            <h6 class="mb-20">Branding Design</h6>
            <p>
              Live workshop where we define the main problems and challenge.
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="item-box radius-15">
            <div class="icon-img-70 mb-40 opacity-3">
              <img src="/assets/imgs/serv-icons/6.png" alt="" />
            </div>
            <span class="mb-30 p-color">04 .</span>
            <h6 class="mb-20">UI/UX Web Design</h6>
            <p>
              Live workshop where we define the main problems and challenge.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
