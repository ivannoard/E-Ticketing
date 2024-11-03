<script setup>
import { ref } from "vue";

const variableName = ref(null);
</script>

<template>
  <footer class="bg-sky-950 py-4 mt-8">
    <div class="px-20 pt-6 pb-10">Footer</div>
    <p class="text-center text-white text-sm">
      Copyright &copy; {{ new Date().getFullYear() }}
    </p>
  </footer>
</template>

<style scoped></style>
