<script setup>
import { ref } from "vue";
const props = defineProps(["id"]);
const variableName = ref(null);
</script>

<template>
  <div class="flex items-center gap-6">
    <p class="text-sky-950 cursor-pointer" @click="this.$router.push('/')">
      Beranda
    </p>
    <v-icon name="io-chevron-forward-outline" />
    <p class="text-sky-950 cursor-pointer" @click="this.$router.push('/event')">
      Event
    </p>
    <v-icon name="io-chevron-forward-outline" />
    <p>Event Name</p>
    <v-icon name="io-chevron-forward-outline" /> {{ props.id }}
  </div>
</template>

<style scoped></style>
