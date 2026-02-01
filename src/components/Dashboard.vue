<script setup lang="ts">
import { usePilotStore } from '@/stores/pilotStore'
import { useRouteStore } from '@/stores/routeStore'
import { supabase } from '@/utilities/supabase'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getGreetingMessage } from '@/utilities/greetingMessage'

const pilotStore = usePilotStore()
const routeStore = useRouteStore()
const routes: any = ref([])
const router = useRouter()

onMounted(async () => {
  if (localStorage.getItem('user') == null) {
    router.push('/login')
  } else {
    const a = localStorage.getItem('user')
    if (a != null) {
      const { login, password } = await JSON.parse(a)

      const { data } = await supabase
        .from('users')
        .select('discord_name, balance')
        .eq('discord_name', login)
        .eq('password', password)

      if (data != null) {
        if (data[0] != undefined) {
          pilotStore.pilotName = data[0].discord_name
          pilotStore.balance = data[0].balance
        }
      }
    }
  }
  routes.value = (await supabase.from('flights').select()).data
})

function logout() {
  localStorage.removeItem('user')
  router.push('/')
}

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
      @click="logout"
    >
      Log out
    </button>
  </div>
  <div class="ml:px-20 px-10">
    <div class="text-right">
      <h2 class="text-2xl">
        {{ getGreetingMessage() }}<span class="text-button-600">{{ pilotStore.pilotName }}</span>
      </h2>
      <p class="text-4xl">
        $<span class="text-button-600">{{ pilotStore.balance }}</span>
      </p>

      <div class="grid grid-cols-2 grid-rows-3 text-center gap-2">
        <div class="row-span-2 border-gray-400 border-r-2 px-4">
          <p>Flights</p>
          <div class="flex mt-10">
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
          <div class="">
            <div class="px-2 flex justify-between pb-2 pt-10">
              <p>From</p>
              <p>To</p>
              <p>Flight #</p>
            </div>
            <div
              @click="setRoute(flight)"
              :key="flight.number"
              class="hover:bg-gray-200 px-2 flex justify-between py-2 border-gray-300 border-t-2"
              v-for="flight in routes"
            >
              <p>{{ flight.from }}</p>
              <p>{{ flight.to }}</p>
              <p>{{ flight.number }}</p>
            </div>
          </div>
        </div>
        <div class="row-span-2"><p>Active flights</p></div>
        <div class="empty"></div>
        <div class=""><p>History</p></div>
      </div>
    </div>
  </div>
</template>
