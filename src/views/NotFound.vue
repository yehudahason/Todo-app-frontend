<script setup lang="ts">
import Head2 from "@/components/Head2.vue";
</script>

<template>
  <Head2 head="Todo tasks" />
  <div class="nf-container">
    <h1>404</h1>
    <h1>Not found</h1>
  </div>
</template>

<style scoped>
.nf-container {
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background-color: rgb(10, 50, 153);
  border-radius: 10px;
  color: white;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);
}
</style>
