<script setup>
import { ref } from "vue";

const variableName = ref(null);
</script>

<template>
  <div
    class="rounded-lg overflow-hidden border hover:shadow-md transition duration-300 cursor-pointer hover:-translate-y-2"
  >
    <div class="thumbnail bg-red-500 w-full h-[200px]"></div>
    <div class="p-2">
      <div class="p-2 border-b-2">
        <h4 class="font-semibold text-lg">Event Title</h4>
        <p class="font-semibold text-gray-600 my-2 text-sm">20 Okt 2024</p>
        <h4 class="font-semibold text-lg">Rp. 250.000</h4>
      </div>
      <div class="p-2">
        <p class="text-sm">Soundfest 2024</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
