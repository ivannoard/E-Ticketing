<script setup>
import { ref } from "vue";

const variableName = ref(null);
</script>

<template>
  <div class="grid grid-cols-12 min-h-screen">
    <div class="col-span-4 flex items-center justify-center">
      <router-view />
    </div>
    <div class="col-span-8 bg-sky-900">qwe</div>
  </div>
</template>

<style scoped></style>
