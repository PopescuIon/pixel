<template>
  <section class="contact section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 valign">
          <div class="sec-head info-box full-width md-mb80">
            <div class="phone fz-30 fw-600 underline main-color">
              <a href="tel:+18408412569">+1 840 841 25 69</a>
            </div>
            <div class="morinfo mt-50 pb-30 bord-thin-bottom">
              <h6 class="mb-15">Address</h6>
              <p>Besòs 1, 08174 Sant Cugat del Vallès, Barcelona</p>
            </div>
            <div class="morinfo mt-30 pb-30 bord-thin-bottom">
              <h6 class="mb-15">Email</h6>
              <p>Support@UiCamp.com</p>
            </div>

            <div class="social-icon mt-50">
              <a href="#0">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#0">
                <i class="fab fa-dribbble"></i>
              </a>
              <a href="#0">
                <i class="fab fa-behance"></i>
              </a>
              <a href="#0">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-7 offset-lg-1 valign">
          <div class="full-width">
            <div class="sec-head mb-50">
              <h6 class="sub-title main-color mb-15">Let&lsquo;s Chat</h6>
              <h3 class="text-u ls1">
                Send a <span class="fw-200">message</span>
              </h3>
            </div>
            <form class="form2">
              <div class="messages"></div>

              <div class="controls row">
                <div class="col-lg-6">
                  <div class="form-group mb-30">
                    <input
                      v-model="formData.name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group mb-30">
                    <input
                      v-model="formData.email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-group mb-30">
                    <input
                      v-model="formData.subject"
                      type="text"
                      name="subject"
                      placeholder="Subject"
                    />
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-group">
                    <textarea
                      v-model="formData.message"
                      name="message"
                      placeholder="Message"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <div class="mt-30">
                    <button
                      type="submit"
                      class="butn butn-full butn-bord radius-30"
                    >
                      <span class="text">Let&lsquo;s Talk</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
});
</script>
