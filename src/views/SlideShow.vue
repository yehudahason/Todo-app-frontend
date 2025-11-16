<script setup lang="ts">
import { ref } from "vue";

const open = ref(false);

function slide(status: boolean) {
  open.value = status;
  console.log(open.value);
}
</script>

<template>
  <img
    v-if="open"
    src="../assets/cancel_presentation_36dp_FFFFFF_FILL0_wght400_GRAD0_opsz40.png"
    alt=""
    @click="slide(false)"
  />
  <div class="slides">
    <img
      v-if="!open"
      src="../assets/dehaze_36dp_EA3323_FILL0_wght400_GRAD0_opsz40.png"
      @click="slide(true)"
    />
    <div class="slide black" :class="{ show: open }"></div>
    <div class="slide red" :class="{ show: open }"></div>
    <div class="slide white" :class="{ show: open }"></div>
  </div>
</template>

<style scoped>
body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
img {
  position: fixed;
  top: 0;
  right: 62%;
}
.slides {
  position: absolute;
  height: 100vh;
  width: 35%;
  left: 0;
}

.slides img {
  position: absolute;
  top: 0;
  left: 10px;
}
.slide {
  position: absolute;
  height: 100vh;
  transform: translateX(-100%);
  transition: transform 0.4s;
}
.slide.show {
  transform: translate(0);
}
.slide.black {
  width: 100%;
  background-color: black;
  transition-delay: 0.4s;
  /* z-index: 1; */
}
.slide.black.show {
  transition-delay: 0s;
}
.slide.red.show {
  transition-delay: 0.2s;
}
.slide.red {
  width: 93%;
  background-color: rgb(255, 0, 0);
  transition-delay: 0.2s;
  /* z-index: 2; */
}
.slide.white {
  width: 85%;
  background-color: rgb(255, 255, 255);
  /* z-index: 3; */
}
.slide.white.show {
  transition-delay: 0.4s;
}
</style>
