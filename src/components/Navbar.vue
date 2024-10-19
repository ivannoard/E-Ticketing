<script setup></script>

<template>
  <header class="sticky top-0 bg-white shadow-md z-50">
    <nav class="flex justify-between items-center p-4">
      <div class="text-xl font-bold">Logo</div>
      <ul class="flex space-x-4">
        <li>
          <router-link to="/" class="hover:text-blue-500"> Home </router-link>
        </li>
        <li>
          <router-link to="/about" class="hover:text-blue-500">
            About
          </router-link>
        </li>
        <li><a href="#" class="hover:text-blue-500">Services</a></li>
        <li><a href="#" class="hover:text-blue-500">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>
