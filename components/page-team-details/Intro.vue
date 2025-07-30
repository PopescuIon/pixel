<template>
  <section class="team-single section-padding pb-0">
    <div class="container">
      <div class="row md-marg justify-content-around bord">
        <div class="col-lg-5">
          <div class="img md-mb50">
            <img src="/assets/imgs/team/t5.jpg" alt="" />
          </div>
        </div>
        <div class="col-lg-6 valign">
          <div class="cont">
            <h2>Aron Bowers</h2>
            <h6 class="sub-title main-color mt-10">UI/UX Designer</h6>
            <div class="text mt-15">
              <p>
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service.
              </p>
            </div>
            <div class="info mt-30">
              <ul class="rest">
                <li class="mb-25 fz-18">
                  <span class="sub-title mr-15">RESPONSIBILITY :</span>
                  Designer
                </li>
                <li class="mb-25 fz-18">
                  <span class="sub-title mr-15">Experiences :</span> 12+ Years
                </li>
                <li class="mb-25 fz-18">
                  <span class="sub-title mr-15">Date Of Birth :</span> 16 Fub
                  1995
                </li>
                <li class="mb-25 fz-18">
                  <span class="sub-title mr-15">Email :</span>
                  Aron_Bowers@domain.com
                </li>
                <li class="fz-18">
                  <span class="sub-title mr-15">Phone :</span> +44 (0) 20 7430
                  2973
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row md-marg justify-content-around mt-80">
        <div class="col-lg-6 valign">
          <div class="text md-mb50">
            <h4 class="mb-15">About Me</h4>
            <p>
              Aron Bowers is known for her ability to take a creative brief and
              run with it, coming back with fresh ideas and a perfectly built
              design file every time. From digital design to long-format
              layouts, he blends beautiful and intuitive with each project he
              touches. he also happens to be the queen of deadline-crushing, Zen
              attitude that keeps the whole Statement team centered.
            </p>
            <ul class="rest mt-30 social-icon d-flex align-items-center">
              <li class="hover-this cursor-pointer">
                <a href="#0" class="hover-anim">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="hover-this cursor-pointer ml-10">
                <a href="#0" class="hover-anim">
                  <i class="fab fa-dribbble"></i>
                </a>
              </li>
              <li class="hover-this cursor-pointer ml-10">
                <a href="#0" class="hover-anim">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li class="hover-this cursor-pointer ml-10">
                <a href="#0" class="hover-anim">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="skills-box">
            <div class="skill-item mb-30">
              <h5 class="sub-title mb-15">UI / UX Design 90%</h5>
              <div class="skill-progress">
                <div class="progres" data-value="90%"></div>
              </div>
            </div>
            <div class="skill-item mb-30">
              <h5 class="sub-title mb-15">Digital Marketing 80%</h5>
              <div class="skill-progress">
                <div class="progres" data-value="80%"></div>
              </div>
            </div>
            <div class="skill-item">
              <h5 class="sub-title mb-15">Development 85%</h5>
              <div class="skill-progress">
                <div class="progres" data-value="85%"></div>
              </div>
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
