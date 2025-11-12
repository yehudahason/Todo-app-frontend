<script setup lang="ts"></script>

<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
  width: 100%;
  background-color: rgb(6, 38, 72);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
</style>
