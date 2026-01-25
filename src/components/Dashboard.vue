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
    routes.value = (await supabase.from('flights').select()).data;

})

function setRoute(route: any) {
    routeStore.setRoute(route);
    router.push('/flight')
}

</script>

<template>
  <div class="my-4 mx-4">
    <h1 class="text-2xl text-button-600 cursor-default">Celestia airways</h1>
  </div>
  <div class="">
    <div class="">
      <h2>Welcome, {{ pilotStore.pilotName }}</h2>
      <p>${{ pilotStore.balance }}</p>
      <p>Where do you want to flight today?</p>
      <div class="flex p-10">
      <div @click="setRoute(route)" class="rounded-xl border-b-2 border-button-300  bg-button-600 m-5 text-white h-20 w-50 p-2" v-for="route in routes">
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
