<script setup>
import { Footer, Navbar } from "../components";
</script>

<template>
  <Navbar />

  <main>
    <router-view />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped></style>
