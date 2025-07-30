<template>
  <div class="google-map">
    <iframe id="gmap_canvas" :src="mapSrc"></iframe>
  </div>
</template>

<script setup>
const mapSrc =
  'https://maps.google.com/maps?q=hollwood&t=&z=11&ie=UTF8&iwloc=&output=embed';
</script>
