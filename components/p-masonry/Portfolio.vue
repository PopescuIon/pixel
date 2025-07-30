<template>
  <section class="work-minimal section-padding pb-40">
    <div class="container">
      <div class="row mb-80">
        <div class="col-lg-4">
          <div class="sec-head">
            <h6 class="sub-title main-color mb-10">DISCOVER OUR CASES</h6>
            <h3>Latest Projects</h3>
          </div>
        </div>
        <div
          class="filtering col-lg-8 d-flex justify-content-end align-items-end"
        >
          <div>
            <div class="filter">
              <span data-filter="*" class="active" data-count="08"> All </span>
              <span data-filter=".design" data-count="03"> Design </span>
              <span data-filter=".development" data-count="02">
                Development
              </span>
              <span data-filter=".marketing" data-count="03"> Marketing </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-xxl">
      <div class="gallery2 row sm-marg">
        <div class="col-lg-6 items design">
          <div class="item mt-10">
            <div class="img">
              <img src="/assets/imgs/works/4/h1.jpg" alt="" />
              <div class="cont inline d-flex align-items-center">
                <div>
                  <h5>
                    <a href="/project-details">Nice guy with a smile</a>
                  </h5>
                </div>
                <div class="ml-auto">
                  <p>
                    <a href="/project-details">Graphic Designing</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 items width2 marketing">
          <div class="item mt-10">
            <div class="img">
              <img src="/assets/imgs/works/4/1.jpg" alt="" />
              <div class="cont">
                <h5>
                  <a href="/project-details">A Nice guy</a>
                </h5>
                <p>
                  <a href="/project-details">Graphic Design</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 items width2 design">
          <div class="item mt-10">
            <div class="img">
              <img src="/assets/imgs/works/4/2.jpg" alt="" />
              <div class="cont">
                <h5>
                  <a href="/project-details">A Nice guy</a>
                </h5>
                <p>
                  <a href="/project-details">Graphic Design</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 items width2 design">
          <div class="item mt-10">
            <div class="img">
              <img src="/assets/imgs/works/4/3.jpg" alt="" />
              <div class="cont">
                <h5>
                  <a href="/project-details">A Nice guy</a>
                </h5>
                <p>
                  <a href="/project-details">Graphic Design</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 items width2 marketing">
          <div class="item mt-10">
            <div class="img">
              <img src="/assets/imgs/works/4/4.jpg" alt="" />
              <div class="cont">
                <h5>
                  <a href="/project-details">A Nice guy</a>
                </h5>
                <p>
                  <a href="/project-details">Graphic Design</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 items marketing">
          <div class="item mt-10">
            <div class="img">
              <img src="/assets/imgs/works/4/h2.jpg" alt="" />
              <div class="cont inline d-flex align-items-center">
                <div>
                  <h5>
                    <a href="/project-details">Nice guy with a smile</a>
                  </h5>
                </div>
                <div class="ml-auto">
                  <p>
                    <a href="/project-details">Graphic Designing</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 items development">
          <div class="item mt-10">
            <div class="img">
              <img src="/assets/imgs/works/4/h3.jpg" alt="" />
              <div class="cont inline d-flex align-items-center">
                <div>
                  <h5>
                    <a href="/project-details">Nice guy with a smile</a>
                  </h5>
                </div>
                <div class="ml-auto">
                  <p>
                    <a href="/project-details">Graphic Designing</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 items development">
          <div class="item mt-10">
            <div class="img">
              <img src="/assets/imgs/works/4/h4.jpg" alt="" />
              <div class="cont inline d-flex align-items-center">
                <div>
                  <h5>
                    <a href="/project-details">Nice guy with a smile</a>
                  </h5>
                </div>
                <div class="ml-auto">
                  <p>
                    <a href="/project-details">Graphic Designing</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// You can include your initIsotope function here
import initIsotope2 from '@/common/initIsotope2';

// Ensure the initIsotope function is called after the component is mounted
onMounted(() => {
  initIsotope2();
});
</script>

<style scoped>
/* Add your styles here */
</style>
