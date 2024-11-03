<script setup></script>

<template>
  <header class="sticky top-0 bg-white shadow-md z-50">
    <nav class="flex justify-between items-center py-4 px-10">
      <div class="flex gap-8 items-center w-1/2">
        <div
          class="text-xl font-bold cursor-pointer"
          @click="this.$router.push('/')"
        >
          E-Ticketing
        </div>
        <div class="flex-1">
          <input
            type="text"
            class="border rounded-md px-5 py-1 w-full focus:outline-sky-950"
          />
        </div>
      </div>
      <div class="flex items-center gap-8">
        <p>Menu 1</p>
        <p>Menu 2</p>
        <p>Menu 3</p>
        <div class="buttons flex items-center gap-2">
          <button
            class="ripple border px-5 py-1.5 rounded-md"
            @click="this.$router.push('/auth/login')"
          >
            Daftar
          </button>
          <button
            class="ripple border px-5 py-1.5 rounded-md"
            @click="this.$router.push('/auth/register')"
          >
            Masuk
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
