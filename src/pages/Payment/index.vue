<script setup>
import { ref, computed, onMounted } from "vue";

// Reactive variables
const remainingTime = ref(900); // Set the countdown starting time in seconds
const isRunning = ref(true); // Timer running state
let timer = null; // Timer reference

// Computed property to format time as MM:SS
const formattedTime = computed(() => {
  const minutes = Math.floor(remainingTime.value / 60);
  const seconds = remainingTime.value % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
});

// Function to start the countdown
const startCountdown = () => {
  if (remainingTime.value > 0) {
    timer = setInterval(() => {
      if (remainingTime.value > 0) {
        remainingTime.value--;
      } else {
        clearInterval(timer);
        isRunning.value = false;
      }
    }, 1000);
  }
};

// Start the countdown when the component is mounted
onMounted(() => {
  startCountdown();
});
</script>

<template>
  <section class="pt-10 px-20">
    <div class="grid grid-cols-12">
      <div class="col-span-8">
        <div class="">
          <h4 class="font-semibold text-xl">Detail Pemesanan</h4>
        </div>
        <div class="">
          <h4 class="font-semibold text-xl">Detail Pemesan</h4>
        </div>
        <div class="">
          <h4 class="font-semibold text-xl">Metode Pembayaran</h4>
        </div>
      </div>
      <div class="col-span-4 relative">
        <div class="sticky top-24">
          <div
            class="w-full bg-yellow-400 rounded-md py-3 px-4 flex items-center gap-4"
          >
            <p>{{ formattedTime }}</p>
            <div class="w-[1px] h-[24px] bg-gray-400"></div>
            <p>Segera selesaikan pesananmu</p>
          </div>
          <div class="mt-8 bg-white border rounded-md shadow-md p-4">
            <h4 class="font-semibold text-xl">Detail Harga</h4>
            <div class="mt-4">
              <div class="flex justify-between items-center">
                <p class="text-md text-gray-600">Total Harga Tiket</p>
                <p class="text-md text-gray-600">Rp. 300.000,00-</p>
              </div>
              <div
                class="flex justify-between items-center border-b-2 border-dashed pb-4"
              >
                <p class="text-md text-gray-600">Biaya Platform</p>
                <p class="text-md text-gray-600">Rp. 0-</p>
              </div>
              <div
                class="flex justify-between items-center border-b-2 border-dashed pb-4 mt-4"
              >
                <p class="text-lg font-semibold">Total Bayar</p>
                <p class="text-lg font-semibold">Rp. 300.000,00-</p>
              </div>
            </div>
            <button
              class="ripple bg-sky-950 text-white w-full rounded-md py-2 mt-8"
            >
              Bayar Tiket
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
