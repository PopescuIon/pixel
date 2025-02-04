<template>
  <section class="intro-skill section-padding pb-0">
    <div class="container pt-80 pb-80">
      <div class="row md-marg">
        <div class="col-lg-6">
          <div class="cont">
            <h6 class="sub-title main-color mb-15">About Us</h6>
            <h2 class="mb-15">Best creative & modern digital agency.</h2>
            <p>
              Driven professional dedicated to making a lasting impact through
              innovative solutions and unwavering excellence.
            </p>
            <div class="skills-box row mt-80">
              <div class="col-md-6">
                <div class="skill-item sm-mb30">
                  <h5 class="sub-title mb-15">UI / UX Design 90%</h5>
                  <div class="skill-progress">
                    <div class="progres" data-value="90%"></div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="skill-item">
                  <h5 class="sub-title mb-15">Development 80%</h5>
                  <div class="skill-progress">
                    <div class="progres" data-value="80%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="imgs">
            <div class="img1">
              <img src="/assets/imgs/intro/2.jpg" alt="" />
            </div>
            <div class="img2">
              <img src="/assets/imgs/intro/03.jpg" alt="" />
            </div>
            <div class="img3">
              <img src="/assets/imgs/intro/04.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import isInView from '@/common/isInView';

function handleShowProgressValues() {
  isInView({
    selector: '.skill-progress .progres',
    isElements: true,
    callback: (element) => {
      element.style.width = element.getAttribute('data-value');
    },
  });
}

onMounted(() => {
  window.addEventListener('scroll', handleShowProgressValues);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleShowProgressValues);
});
</script>
