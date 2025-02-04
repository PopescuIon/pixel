<template>
  <header
    class="main-header bg-img valign"
    data-background="/assets/imgs/background/bg5.jpg"
    data-overlay-dark="7"
  >
    <div class="container ontop">
      <div class="row">
        <div class="col-lg-11">
          <div class="caption">
            <h1>Best way to build</h1>
            <div class="d-flex align-items-end">
              <div>
                <h1 class="nowrap">
                  <span class="main-color">great</span> website.
                </h1>
              </div>
              <div>
                <div class="text ml-30">
                  <p>
                    We back the founders of new forms of network, digital
                    organisations that harness the
                    <span class="text-light fw-600">
                      talents of individuals
                    </span>
                    for the benefit of the collective.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-80">
        <div class="col-lg-6 order-md-2">
          <div class="icon-img">
            <img src="/assets/imgs/icon-img/arrow-down-big.png" alt="" />
          </div>
        </div>
        <div class="col-lg-6 d-flex justify-content-end order-md-1">
          <div class="info">
            <h2 class="mb-10">12k +</h2>
            <h6>
              Projects completed <br />
              <span class="main-color">successfully</span>
            </h6>
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
