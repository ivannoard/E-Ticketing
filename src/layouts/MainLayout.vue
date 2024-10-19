<script setup>
import { Footer, Navbar } from "../components";
</script>

<template>
  <Navbar />

  <main class="h-[1000px] bg-red-500">
    <router-view />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped></style>
