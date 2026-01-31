<script setup lang="ts">
import { usePilotStore } from '@/stores/pilotStore'
import { useRouteStore } from '@/stores/routeStore'
import { supabase } from '@/utilities/supabase'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const pilotStore = usePilotStore()
const routeStore = useRouteStore()
const routes: any = ref([])
const router = useRouter()

onMounted(async () => {
  routes.value = (await supabase.from('flights').select()).data
})

function setRoute(route: any) {
  routeStore.setRoute(route)
  router.push('/flight')
}
</script>

<template>
  <div class="my-4 mx-4 flex items-center justify-between mb-8">
    <h1 class="text-2xl text-button-600 cursor-default">NEX Air | Dashboard</h1>
    <button
      class="h-8 cursor-pointer hover:bg-text w-20 py-1.25 mx-2 bg-button-600 text-white rounded-sm"
    >
      Log out
    </button>
  </div>
  <div class="ml:px-20 px-10">
    <div class="text-right">
      <h2 class="text-2xl">
        Good morning, <span class="text-button-600">{{ pilotStore.pilotName }}</span>
      </h2>
      <p class="text-4xl">
        $<span class="text-button-600">{{ pilotStore.balance }}</span>
      </p>
      <div class="flex mt-20">
        <input
          class="mr-2 focus:border-button-600 focus:outline-none py-1 px-2 w-full border-2 rounded-sm border-button-300"
          type="text"
          placeholder="Enter flight number to search"
        />
        <button
          class="ml-2 cursor-pointer hover:bg-text text-white text-center w-40 bg-button-600 rounded-sm py-2"
        >
          Search
        </button>
      </div>
      <div class="flex p-10">
        <div
          @click="setRoute(route)"
          class="rounded-xl border-b-2 border-button-300 bg-button-600 m-5 text-white h-20 w-50 p-2"
          v-for="route in routes"
        >
          <p class="text-bold">{{ route.flight_number }}</p>
          <div class="flex justify-between">
            <p class="">{{ route.from }}</p>
            <p class="">{{ route.to }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
