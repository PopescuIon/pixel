<template>
  <section class="page-error section-padding valign">
    <div class="container">
      <div class="text-center">
        <h1>404</h1>
        <p>The page you are looking for doesn’t exist</p>
        <a
          href="/home-main"
          class="butn butn-md butn-bg main-colorbg radius-30 mt-30"
        >
          <span class="text">Back to Home</span>
        </a>
      </div>
    </div>
    <div class="marq">
      <div class="main-marq">
        <div class="slide-har st1 strok">
          <div class="box">
            <div v-for="(item, i) in AllMarquess" :key="i" class="item">
              <h4 class="d-flex align-items-center">
                <span>{{ item }}</span>
                <span class="ml-40">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
              </h4>
            </div>
          </div>
          <div class="box">
            <div v-for="(item, i) in AllMarquess" :key="i" class="item">
              <h4 class="d-flex align-items-center">
                <span>{{ item }}</span>
                <span class="ml-40">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="marq">
      <div class="main-marq">
        <div class="slide-har st2 non-strok">
          <div class="box">
            <div v-for="(item, i) in AllMarquess" :key="i" class="item">
              <h4 class="d-flex align-items-center">
                <span>{{ item }}</span>
                <span class="ml-40">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
              </h4>
            </div>
          </div>
          <div class="box">
            <div v-for="(item, i) in AllMarquess" :key="i" class="item">
              <h4 class="d-flex align-items-center">
                <span>{{ item }}</span>
                <span class="ml-40">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="marq">
      <div class="main-marq">
        <div class="slide-har st1 strok">
          <div class="box">
            <div v-for="(item, i) in AllMarquess" :key="i" class="item">
              <h4 class="d-flex align-items-center">
                <span>{{ item }}</span>
                <span class="ml-40">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
              </h4>
            </div>
          </div>
          <div class="box">
            <div v-for="(item, i) in AllMarquess" :key="i" class="item">
              <h4 class="d-flex align-items-center">
                <span>{{ item }}</span>
                <span class="ml-40">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="marq">
      <div class="main-marq">
        <div class="slide-har st2 non-strok">
          <div class="box">
            <div v-for="(item, i) in AllMarquess" :key="i" class="item">
              <h4 class="d-flex align-items-center">
                <span>{{ item }}</span>
                <span class="ml-40">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
              </h4>
            </div>
          </div>
          <div class="box">
            <div v-for="(item, i) in AllMarquess" :key="i" class="item">
              <h4 class="d-flex align-items-center">
                <span>{{ item }}</span>
                <span class="ml-40">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const marquess = ['Page NotFound'];
const AllMarquess = Array(8).fill(marquess).flat();
</script>
