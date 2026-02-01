<script setup lang="js">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { usePilotStore } from '@/stores/pilotStore'
import { supabase } from '@/utilities/supabase'

const pilotStore = usePilotStore()
const router = useRouter()

const login = ref('')
const password = ref('')

onMounted(async () => {
  if (localStorage.getItem('user') != null) {
    const { login, password } = JSON.parse(localStorage.getItem('user'))
    const { data } = await supabase
      .from('users')
      .select('discord_name, balance')
      .eq('discord_name', login)
      .eq('password', password)

    if (data != null) {
      if (data[0] != undefined) {
        pilotStore.pilotName = data[0].discord_name
        pilotStore.balance = data[0].balance
        router.push('/dashboard')
      }
    }
  }
})

async function getUser() {
  const { data } = await supabase
    .from('users')
    .select('discord_name, balance')
    .eq('discord_name', login.value)
    .eq('password', password.value)

  if (data != null) {
    if (data[0] != undefined) {
      pilotStore.pilotName = data[0].discord_name
      pilotStore.balance = data[0].balance
      router.push('/dashboard')
      localStorage.setItem('user', JSON.stringify({ password: password.value, login: login.value }))
    }
  }
}
</script>

<template>
  <div
    dir="rtl"
    class="absolute h-full w-full top-0 bg-[url('https://images.unsplash.com/photo-1612676239016-41e2c92b8e06?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=pinal-jain-x-XwnC7FgFM-unsplash.jpg')] bg-cover bg-center"
  >
    <div class="absolute h-full w-full top-0 bg-overflow-200"></div>
    <div dir="ltr" class="absolute right-0 h-full bg-white p-10 w-150 rounded-s-lg">
      <h2 class="mb-10 font-bold text-2xl">Welcome back!</h2>
      <p class="text-text mb-0">Discord name</p>
      <input
        class="focus:border-button-600 focus:outline-none py-1 px-2 w-full border-2 rounded-sm border-button-300"
        type="text"
        placeholder="Enter your Discord username"
        v-model="login"
      />
      <p class="text-text mt-5">Password</p>
      <input
        class="focus:border-button-600 focus:outline-none py-1 px-2 w-full border-2 rounded-sm border-button-300"
        type="password"
        placeholder="Enter your password"
        v-model="password"
      />
      <button
        class="cursor-pointer hover:bg-text text-white mt-5 text-center w-full bg-button-600 rounded-sm py-2"
        @click="getUser"
      >
        Sign in
      </button>
      <p class="text-text m-0 mt-5 mb-2 text-center w-full">Don't have an account?</p>
      <button
        class="cursor-pointer hover:bg-transparent hover:border-button-300 hover:border box-border py-2 w-full bg-button-300 rounded-sm"
        @click="router.push('/signup')"
      >
        Become a member
      </button>
    </div>
  </div>
  <div class="absolute bottom-4 right-4 flex justify-between">
    <h1 class="text-xl text-button-600 cursor-default">
      NEX Air |
      <a
        href="https://unsplash.com/photos/silhouette-of-mountains-during-daytime-x-XwnC7FgFM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
        >Pinal Jain</a
      >
    </h1>
  </div>
</template>
