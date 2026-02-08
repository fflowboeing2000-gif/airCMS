<script setup lang="ts">
import { supabase } from '@/utilities/supabase'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getGreetingMessage } from '@/utilities/greetingMessage'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
const routes: any = ref([])
const activeRoutes = ref({})
const router = useRouter()
//const pilotName = ref("")
//const balance = ref(0)

onMounted(async () => {
  /*
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
  */

  const {
    data: { user },
  } = await supabase.auth.getUser()

  userStore.user = user?.user_metadata

  const balance = await supabase.from('balances').select('balance').single()

  userStore.balance = balance.data?.balance

  //routes.value = (await supabase.from('flights').select()).data
})

async function logout() {
  localStorage.removeItem('user')
  const { error } = await supabase.auth.signOut()
  router.push('/')
}
</script>

<template>
  <div class="my-4 mx-4 flex items-center justify-between mb-8">
    <h1 class="text-2xl text-button-600 cursor-default">NEX Air | Dashboard</h1>
    <button
      class="h-8 cursor-pointer hover:bg-red-400 hover:border-red-400 hover:text-white hover:border box-border w-20 mx-2 bg-transparent rounded-sm"
      @click="logout"
    >
      Log out
    </button>
  </div>
  <div class="ml:px-20 px-10">
    <div class="text-right">
      <h2 class="text-2xl">
        {{ getGreetingMessage()
        }}<span class="text-button-600">{{ userStore.user.full_name }}</span>
      </h2>
      <p class="text-4xl">
        $<span class="text-button-600">{{ userStore.balance }}</span>
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
              @click=""
              :key="flight.id"
              class="hover:bg-gray-200 cursor-pointer px-2 flex justify-between py-2 border-gray-300 border-t-2"
              v-for="flight in routes"
            >
              <p>{{ flight.from }}</p>
              <p>{{ flight.to }}</p>
              <p>{{ flight.number }}</p>
            </div>
          </div>
        </div>
        <div class="row-span-2"><p>Active flight</p></div>
        <div class="empty"></div>
        <div class=""><p>History</p></div>
      </div>
    </div>
  </div>
</template>
