<script setup>
import { computed, ref } from "vue";
import { BreadCrumb } from "../../components";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";

const router = useRouter();

const active = ref("Deskripsi");

const route = useRoute();
const eventId = computed(() => route.params.id);

function setActive(tab) {
  active.value = tab;
}
</script>

<template>
  <section class="pt-10 px-20">
    <BreadCrumb :id="eventId" />
  </section>
  <section class="mt-8 px-20 grid grid-cols-12 gap-4">
    <div class="col-span-8">
      <div class="bg-red-500 rounded-md w-full h-full"></div>
    </div>
    <div class="col-span-4">
      <div class="bg-white shadow-md border rounded-md p-4">
        <div class="title mb-8">
          <h5 class="font-semibold text-xl">Event Name</h5>
        </div>
        <div class="flex flex-col gap-4">
          <div class="date">
            <div class="flex items-center gap-4">
              <v-icon name="md-daterange" scale="1.5" />
              <p>04 November 2024</p>
            </div>
          </div>
          <div class="times">
            <div class="flex items-center gap-4">
              <v-icon name="co-clock" scale="1.5" />
              <p>21.00 - 00.00 WIB</p>
            </div>
          </div>
          <div class="location">
            <div class="flex items-center gap-4">
              <v-icon name="io-location-outline" scale="1.5" />
              <p>Jakarta, Indonesia</p>
            </div>
          </div>
        </div>
        <div class="mt-8">
          <div class="pt-6 border-t-2 flex gap-4 items-center">
            <div class="rounded-full w-[50px] h-[50px] bg-red-500"></div>
            <div class="">
              <p class="text-sm text-gray-500">Diselenggarakan Oleh</p>
              <h5 class="font-semibold text-md">SoundFest2024</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mt-8 px-20 grid grid-cols-12 gap-4">
    <div class="col-span-8">
      <div class="flex items-center">
        <button
          class="w-1/2 border-b-[3px] py-2"
          :class="{
            'border-sky-950 text-sky-950': active === 'Deskripsi',
            'border-gray-300 text-gray-500': active !== 'Deskripsi',
          }"
          @click="setActive('Deskripsi')"
        >
          Deskripsi
        </button>
        <button
          class="w-1/2 border-b-[3px] py-2"
          :class="{
            'border-sky-950 text-sky-950': active === 'Tiket',
            'border-gray-300 text-gray-500': active !== 'Tiket',
          }"
          @click="setActive('Tiket')"
        >
          Tiket
        </button>
      </div>
      <div class="mt-4">
        <div v-if="active === 'Deskripsi'" class="flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero
            sequi id voluptatem fugit quaerat error sunt, optio, nihil
            exercitationem hic mollitia enim. Minus, cum provident quae corrupti
            nesciunt vero? Ipsa optio quas reiciendis, ut enim iusto ducimus
            distinctio ratione. Ipsum ratione mollitia, dolor ipsam quidem
            veniam rem deleniti non!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            sequi quidem aut velit quas vero magnam doloremque, distinctio ex
            cum pariatur commodi obcaecati. Incidunt, harum inventore culpa
            fugiat magni est totam numquam non libero eveniet officia
            voluptatibus quae repudiandae nobis perferendis. Placeat unde
            blanditiis doloremque nisi quo. Facere, vel ad!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            sequi quidem aut velit quas vero magnam doloremque, distinctio ex
            cum pariatur commodi obcaecati. Incidunt, harum inventore culpa
            fugiat magni est totam numquam non libero eveniet officia
            voluptatibus quae repudiandae nobis perferendis. Placeat unde
            blanditiis doloremque nisi quo. Facere, vel ad!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            sequi quidem aut velit quas vero magnam doloremque, distinctio ex
            cum pariatur commodi obcaecati. Incidunt, harum inventore culpa
            fugiat magni est totam numquam non libero eveniet officia
            voluptatibus quae repudiandae nobis perferendis. Placeat unde
            blanditiis doloremque nisi quo. Facere, vel ad!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            sequi quidem aut velit quas vero magnam doloremque, distinctio ex
            cum pariatur commodi obcaecati. Incidunt, harum inventore culpa
            fugiat magni est totam numquam non libero eveniet officia
            voluptatibus quae repudiandae nobis perferendis. Placeat unde
            blanditiis doloremque nisi quo. Facere, vel ad!
          </p>
        </div>
        <div class="" v-if="active === 'Tiket'">
          <div class="mt-6" v-for="item in [1, 2, 3, 4]" :key="item">
            <div class="bg-blue-100 rounded-md ticket">
              <div class="pb-6 border-b-2 border-sky-950 border-dashed">
                <h4 class="font-semibold text-xl">Normal Price</h4>
                <div class="flex items-center gap-1 mt-4">
                  <v-icon name="co-clock" scale="1" />
                  <p class="text-sm">Berakhir pada 10 November 2024</p>
                </div>
              </div>
              <h4 class="font-semibold mt-4 text-2xl">Rp. 300.000,00 -</h4>
              <div class="ticket-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-4 relative">
      <div class="sticky top-24">
        <div class="bg-white border shadow-md p-8 rounded-md">
          <div class="flex items-center gap-4 pb-4 border-b-2">
            <v-icon name="io-ticket-sharp" scale="2" />
            <p class="text-md">
              Kamu belum memilih tiket. Silakan pilih lebih dulu di tab menu
              TIKET.
            </p>
          </div>
          <div class="mt-4 flex justify-between items-center">
            <p class="text-gray-500">Harga mulai dari</p>
            <h5 class="font-semibold">Rp. 0-</h5>
          </div>
          <button
            class="ripple bg-sky-950 text-white w-full rounded-md mt-4 py-3 text-sm"
            @click="router.push('/payment')"
          >
            Beli Tiket
          </button>
        </div>
        <div class="mt-6">
          <h5 class="text-gray-500 text-md">Bagikan Event</h5>
          <div class="social-medias flex gap-2 mt-2">
            <div
              class="rounded-full w-[40px] h-[40px] bg-red-500 cursor-pointer border"
            ></div>
            <div
              class="rounded-full w-[40px] h-[40px] bg-red-500 cursor-pointer border"
            ></div>
            <div
              class="rounded-full w-[40px] h-[40px] bg-red-500 cursor-pointer border"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
