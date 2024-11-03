<script setup>
import { ref } from "vue";
import { Card } from "../../components";

const variableName = ref(null);
</script>

<template>
  <section class="pt-10 px-20">
    <div class="w-full bg-red-500 rounded-xl h-[300px]"></div>
  </section>
  <section class="mt-8 px-20">
    <div class="grid grid-cols-4 gap-4">
      <div
        v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
        :key="item"
        @click="this.$router.push(`/event/${item}`)"
      >
        <Card />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
