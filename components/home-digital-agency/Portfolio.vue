<template>
  <section class="portfolio-tab crev section-padding sub-bg">
    <div class="container">
      <div class="sec-head mb-80">
        <div class="d-flex align-items-center">
          <div>
            <span class="sub-title main-color mb-5">Our Portfolio</span>
            <h3 class="fw-600 fz-50 text-u d-rotate wow">
              <span class="rotate-text">
                Selected <span class="fw-200">Works.</span>
              </span>
            </h3>
          </div>
          <div class="ml-auto vi-more">
            <a
              href="/portfolio-creative"
              class="butn butn-sm butn-bord radius-30"
            >
              <span>View All</span>
            </a>
            <span class="icon ti-arrow-top-right"></span>
          </div>
        </div>
      </div>
      <div class="row lg-marg">
        <div class="col-lg-6 d-flex align-items-center justify-content-center">
          <div class="glry-img md-mb50">
            <div id="tab-1" class="tab-img current">              
              <img :src="require('./assets/imgs/works/1/1.jpg')" alt="">
            </div>
            <div id="tab-2" class="tab-img">             
              <img :src="require('./assets/imgs/works/1/6.jpg')" alt="">
            </div>
            <div id="tab-3" class="tab-img">              
              <img :src="require('./assets/imgs/works/1/3.jpg')" alt="">
            </div>
            <div id="tab-4" class="tab-img">
              
              <img :src="require('./assets/imgs/works/1/4.jpg')" alt="">
            </div>
            <div id="tab-5" class="tab-img">               
              <img :src="require('./assets/imgs/works/1/5.jpg')" alt="">
            </div>
            <div class="circle-blur">
             
              <img :src="require('./assets/imgs/patterns/blur1.png')" alt="">

            </div>
          </div>
        </div>
        <div class="col-lg-6 content valign">
          <div class="full-width">
            <div
              @mouseenter="handleMouseEnter"
              class="cluom mb-40 current"
              data-tab="tab-1"
            >
              <div class="info d-flex align-items-end">
                <h4>
                  <span class="mr-10 fz-16">01.</span>
                  <a href="/project-details">Iridescent Wallpapers</a>
                </h4>
                <h6 class="sub-title p-color ml-20">/ UI-UX Design</h6>
              </div>
              <div class="img">                 
                <img :src="require('./assets/imgs/works/1/1.jpg')" alt="">
              </div>
            </div>
            <div
              @mouseenter="handleMouseEnter"
              class="cluom mb-40"
              data-tab="tab-2"
            >
              <div class="info d-flex align-items-end">
                <h4>
                  <span class="mr-10 fz-16">02.</span>
                  <a href="/project-details">Proof Template</a>
                </h4>
                <h6 class="sub-title p-color ml-20">/ Marketing</h6>
              </div>
              <div class="img">
               
                <img :src="require('./assets/imgs/works/1/2.jpg')" alt="">
              </div>
            </div>
            <div
              @mouseenter="handleMouseEnter"
              class="cluom mb-40"
              data-tab="tab-3"
            >
              <div class="info d-flex align-items-end">
                <h4>
                  <span class="mr-10 fz-16">03.</span>
                  <a href="/project-details">Ledge Phone</a>
                </h4>
                <h6 class="sub-title p-color ml-20">/ Branding</h6>
              </div>
              <div class="img">
                
                <img :src="require('./assets/imgs/works/1/3.jpg')" alt="">
              </div>
            </div>
            <div
              @mouseenter="handleMouseEnter"
              class="cluom mb-40"
              data-tab="tab-4"
            >
              <div class="info d-flex align-items-end">
                <h4>
                  <span class="mr-10 fz-16">04.</span>
                  <a href="/project-details">Frame Sans</a>
                </h4>
                <h6 class="sub-title p-color ml-20">/ App Design</h6>
              </div>
              <div class="img">
                
                <img :src="require('./assets/imgs/works/1/1.jpg')" alt="">
              </div>
            </div>
            <div @mouseenter="handleMouseEnter" class="cluom" data-tab="tab-5">
              <div class="info d-flex align-items-end">
                <h4>
                  <span class="mr-10 fz-16">05.</span>
                  <a href="/project-details">Modern Minimalist</a>
                </h4>
                <h6 class="sub-title p-color ml-20">/ Developments</h6>
              </div>
              <div class="img">
                
                <img :src="require('./assets/imgs/works/1/2.jpg')" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
function handleMouseEnter(event) {
  var tab_id = event.currentTarget.getAttribute('data-tab');

  document.querySelectorAll('.glry-img .tab-img').forEach((el) => {
    el.classList.remove('current');
  });
  document.querySelectorAll('.content .cluom').forEach((el) => {
    el.classList.remove('current');
  });

  document.querySelector('#' + tab_id).classList.add('current');
  console.log(document.querySelector('#' + tab_id));
  // document.querySelectorAll('.links-img .img').forEach((el) => {
  //   el.classList.remove('current');
  // });

  if (!event.currentTarget.classList.contains('current')) {
    event.currentTarget.classList.add('current');
  }
}
</script>
