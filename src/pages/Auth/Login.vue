<script setup>
import { ref } from "vue";

const variableName = ref(null);

function handleSubmit(e) {
  e.preventDefault();
}
</script>

<template>
  <div class="bg-white p-4 rounded-md min-w-[80%] shadow-md border">
    <div class="title pb-2 border-b-2">
      <h4 class="font-semibold text-md">Login</h4>
    </div>
    <form action="" class="mt-2 flex flex-col gap-2" @submit="handleSubmit">
      <div class="form-group flex flex-col gap-1">
        <label for="" class="font-semibold text-gray-700 text-sm">Email</label>
        <input
          type="text"
          class="border px-3 py-1 block w-full rounded-md focus:outline-sky-900"
        />
      </div>
      <div class="form-group flex flex-col gap-1">
        <label for="" class="font-semibold text-gray-700 text-sm"
          >Password</label
        >
        <input
          type="text"
          class="border px-3 py-1 block w-full rounded-md focus:outline-sky-900"
        />
      </div>
      <button
        class="ripple bg-sky-950 text-white font-semibold w-full rounded-md py-1.5 mt-2 text-sm"
      >
        Login
      </button>
    </form>
    <p class="text-sm mt-4 text-center">
      Belum punya akun?
      <span
        class="cursor-pointer text-sky-900"
        @click="this.$router.push('register')"
        >Daftar Sekarang</span
      >
    </p>
  </div>
</template>

<style scoped></style>
