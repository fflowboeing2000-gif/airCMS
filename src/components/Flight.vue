<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useRouteStore } from '@/stores/routeStore'
import { usePilotStore } from '@/stores/pilotStore'

const routeStore = useRouteStore()
const pilotStore = usePilotStore()
const router = useRouter()
</script>

<template>
  <div
    dir="rtl"
    class="absolute h-full w-full top-0 bg-[url('https://images.pexels.com/photos/33676838/pexels-photo-33676838.jpeg?_gl=1*v42hm5*_ga*MTY2MTgzMTMyMi4xNzY4MTI3MTE4*_ga_8JE65Q40S6*czE3NjkzNjQ4NzEkbzUkZzEkdDE3NjkzNjQ4ODckajQ0JGwwJGgw')] bg-cover bg-center"
  >
    <div class="absolute h-full w-full top-0 bg-overflow-200"></div>
    <div dir="ltr" class="absolute right-0 h-full bg-white p-10 w-150 rounded-s-lg">
      <h2 class="mb-10 font-bold text-2xl">Get ready for {{ routeStore.number }} flight!</h2>
      <div class="grid grid-cols-4 text-center">
        <p>From</p>
        <p>To</p>
        <p>Flight #</p>
        <p>Distance nm</p>
        <p class="border-t-2 border-gray-200 py-2 border-r-2">{{ routeStore.from }}</p>
        <p class="border-t-2 border-gray-200 py-2 border-r-2">{{ routeStore.to }}</p>
        <p class="border-t-2 border-gray-200 py-2 border-r-2">{{ routeStore.number }}</p>
        <p class="border-t-2 border-gray-200 py-2">{{ routeStore.distance }} nm</p>
        <p class="mt-4">Pilot</p>
        <p class="mt-4"></p>
        <p class="mt-4"></p>
        <p class="mt-4"></p>
        <p class="border-t-2 border-gray-200 py-2">{{ pilotStore.pilotName }}</p>
      </div>
      <p class="text-2xl py-10 text-center">
        $<span class="text-button-600">{{ routeStore.distance * 10 * routeStore.index }}</span>
      </p>
      <button
        class="cursor-pointer hover:bg-text text-white mt-5 text-center w-full bg-button-600 rounded-sm py-2"
      >
        Start flight
      </button>
      <button
        class="cursor-pointer hover:bg-red-700 text-white mt-5 text-center w-full bg-red-500 rounded-sm py-2"
        @click="router.push('/dashboard')"
      >
        Cancel
      </button>
    </div>
  </div>
  <div class="absolute bottom-4 right-4 flex justify-between">
    <h1 class="text-xl text-button-600 cursor-default">Celestia airways | Ramon Karolan</h1>
  </div>
</template>
