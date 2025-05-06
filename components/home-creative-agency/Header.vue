<template>
  <header class="header crev-header bg-img">
    <div class="container ontop">
      <div class="row justify-content-end">
        <div class="col-lg-12">
          <div class="caption mb-100">
            <div class="row">
              <div class="col-lg-8">
                <h1 class="text-u">Webfolio</h1>
                <h1 class="text-u">Full services</h1>
              </div>
              <div class="col-lg-4 d-flex justify-content-end">
                <div class="circle-button md-hide">
                  <a href="https://youtu.be/AzwC6umvd1s" class="vid">
                    <div class="rotate-circle fz-30 text-u">
                      <svg class="textcircle" viewBox="0 0 500 500">
                        <defs>
                          <path
                            id="textcircle"
                            d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                          ></path>
                        </defs>
                        <text>
                          <textPath xlinkHref="#textcircle" textLength="900">
                            Explore More - Explore More -
                          </textPath>
                        </text>
                      </svg>
                    </div>
                    <div class="icon">
                      <i class="fas fa-play"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="row text-left align-items-center">
              <div class="col-lg-3 order-md-2">
                <p>
                  We back the founders of new forms of network, digital
                  organisations that harness the talents.
                </p>
              </div>
              <div class="col-lg-9 order-md-1 md-mb30">
                <h1 class="text-u">Digital agency</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div
            class="full-img bg-img"
            data-background="./assets/imgs/header/2.jpg"
          ></div>
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
