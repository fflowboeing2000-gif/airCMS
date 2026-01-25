<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useRouteStore } from '@/stores/routeStore';

const routeStore = useRouteStore()
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
      <p>FROM: {{ routeStore.from }}</p>
    </div>
  </div>
  <div class="absolute bottom-4 right-4 flex justify-between">
    <h1 class="text-xl text-button-600 cursor-default">Celestia airways | Ramon Karolan </h1>
  </div>
</template>
