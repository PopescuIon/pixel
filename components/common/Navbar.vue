<template>
  <nav class="navbar navbar-expand-lg bord blur">
    <div class="container o-hidden">
      <a class="logo icon-img-100" href="#">
        <img src="/assets/imgs/logo-light.png" alt="logo" />
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="icon-bar">
          <i class="fas fa-bars"></i>
        </span>
      </button>

      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav">
          <li
            @mousemove="handleDropdownMouseMove"
            @mouseleave="handleDropdownMouseLeave"
            class="nav-item dropdown"
          >
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="rolling-text">Demos</span>
            </a>
            <div class="dropdown-menu mega-menu">
              <div class="container">
                <div class="row">
                  <div class="col-lg">
                    <NuxtLink class="item-img text-center" href="/home-main">
                      <span class="img">
                        <img src="/assets/imgs/menu/1.png" alt="" />
                      </span>
                      <span class="mt-15">Main Home</span>
                    </NuxtLink>
                  </div>
                  <div class="col-lg">
                    <a class="item-img text-center" href="/home-modern-studio">
                      <span class="img">
                        <img src="/assets/imgs/menu/2.png" alt="" />
                      </span>
                      <span class="mt-15">Modern Studio</span>
                    </a>
                  </div>
                  <div class="col-lg">
                    <a
                      class="item-img text-center"
                      href="/home-creative-agency"
                    >
                      <span class="img">
                        <img src="/assets/imgs/menu/3.png" alt="" />
                      </span>
                      <span class="mt-15">Creative Agency</span>
                    </a>
                  </div>
                  <div class="col-lg">
                    <a class="item-img text-center" href="/home-digital-agency">
                      <span class="img">
                        <img src="/assets/imgs/menu/4.png" alt="" />
                      </span>
                      <span class="mt-15">Digital Agency</span>
                    </a>
                  </div>
                  <div class="col-lg">
                    <a class="item-img text-center" href="/home-personal">
                      <span class="img">
                        <img src="/assets/imgs/menu/5.png" alt="" />
                      </span>
                      <span class="mt-15">Freelancer</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            @mousemove="handleDropdownMouseMove"
            @mouseleave="handleDropdownMouseLeave"
            class="nav-item dropdown"
          >
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="rolling-text">Pages</span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="/page-about"> About Us </a>
              </li>
              <li>
                <a class="dropdown-item" href="/page-services"> Services </a>
              </li>
              <li>
                <a class="dropdown-item" href="/page-services-details">
                  Services Details
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/page-team"> Our Team </a>
              </li>
              <li>
                <a class="dropdown-item" href="/page-team-details">
                  Team Details
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/page-contact"> Contact Us </a>
              </li>
              <li>
                <a class="dropdown-item" href="/page-FAQ"> FAQS </a>
              </li>
              <li>
                <a class="dropdown-item" href="/page-404"> Error 404 </a>
              </li>
            </ul>
          </li>
          <li
            @mousemove="handleDropdownMouseMove"
            @mouseleave="handleDropdownMouseLeave"
            class="nav-item dropdown"
          >
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="rolling-text">Portfolio</span>
            </a>
            <div class="dropdown-menu">
              <NuxtLink class="dropdown-item" href="/portfolio-gallery"> Gallery </NuxtLink>
              <a class="dropdown-item" href="/portfolio-creative">
                Portfolio Creative
              </a>
              <a class="dropdown-item" href="/portfolio-creative-carousel">
                Creative Carousel
              </a>
              <a class="dropdown-item" href="/portfolio-grid">
                Portfolio Grid
              </a>
              <a class="dropdown-item" href="/portfolio-masonry">
                Portfolio Masonry
              </a>
              <a class="dropdown-item" href="/project-details">
                Project Details
              </a>
            </div>
          </li>
          <li
            @mousemove="handleDropdownMouseMove"
            @mouseleave="handleDropdownMouseLeave"
            class="nav-item dropdown"
          >
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="rolling-text">Blogs</span>
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="/blog-classic"> Blog Standerd </a>
              <a class="dropdown-item" href="/blog-grid-sidebar">
                Grid With Sidebar
              </a>
              <a class="dropdown-item" href="/blog-grid-3column">
                Grid Three Column
              </a>
              <a class="dropdown-item" href="/blog-details"> Blog Details </a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/page-contact">
              <span class="rolling-text">Contact Us</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="contact-button">
        <a
          href="/page-contact"
          class="butn butn-sm butn-bg main-colorbg radius-5"
        >
          <span class="text">Let&apos;s contact</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { ref } from 'vue';

function handleScroll() {
  const bodyScroll = window.scrollY;
  const navbar = document.querySelector('.navbar');

  if (bodyScroll > 300) navbar.classList.add('nav-scroll');
  else navbar.classList.remove('nav-scroll');
}

function handleDropdownMouseMove(event) {
  event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
}

function handleDropdownMouseLeave(event) {
  event.currentTarget.querySelector('.dropdown-menu').classList.remove('show');
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
