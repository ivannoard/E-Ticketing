<script setup>
import { Card } from "../../components";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <!-- banner -->
  <section class="pt-10 px-20">
    <div class="w-full bg-red-500 rounded-xl h-[300px]"></div>
  </section>
  <!-- Event List -->
  <section class="mt-8 px-20">
    <div class="flex justify-between items-center pb-2 border-b-2">
      <h3 class="font-bold text-2xl">Event Pilihan</h3>
      <p
        class="text-sky-900 cursor-pointer text-sm hover:underline"
        @click="router.push('event')"
      >
        Lihat Selengkapnya
      </p>
    </div>
    <div class="mt-4">
      <div class="grid grid-cols-4 gap-4">
        <div
          v-for="item in [1, 2, 3, 4]"
          :key="item"
          class="col-span-1"
          @click="router.push(`/event/${item}`)"
        >
          <Card />
        </div>
      </div>
    </div>
  </section>
  <!-- promo banner -->
  <section class="mt-8 px-20">
    <div class="w-full bg-red-500 rounded-xl h-[200px]"></div>
  </section>
  <!--  -->
  <section class="mt-8">
    <div class="w-full bg-sky-950 h-[250px]"></div>
  </section>
  <!-- film section -->
  <section class="mt-8 px-20">
    <div class="flex items-center justify-between">
      <h3 class="font-bold text-2xl">Film Terbaru</h3>
      <p class="text-blue-500 font-semibold cursor-pointer">Lihat Semua</p>
    </div>
    <div class="mt-4">
      <div class="grid grid-cols-4 gap-4">
        <div
          v-for="item in [1, 2, 3, 4]"
          :key="item"
          class="col-span-1 rounded-lg overflow-hidden border"
        >
          <div class="thumbnail bg-red-500 w-full h-[400px]"></div>
        </div>
      </div>
    </div>
  </section>
  <!-- promo banner -->
  <section class="mt-8 px-20">
    <div class="w-full bg-red-500 rounded-xl h-[200px]"></div>
  </section>
  <!-- category section -->
  <section class="mt-8 px-20">
    <div class="bg-white border shadow-md p-8 rounded-lg">
      <h4 class="font-bold text-xl">Kategori Event</h4>
      <div class="grid grid-cols-4 gap-4 mt-4">
        <div
          class="bg-red-500 rounded-md p-4 h-[250px]"
          v-for="items in [1, 2, 3, 4]"
          :key="items"
        ></div>
      </div>
    </div>
  </section>
  <button
    class="block mx-auto mt-8 bg-sky-950 px-10 py-2 text-white rounded-md"
  >
    Lihat Selengkapnya
  </button>
</template>
