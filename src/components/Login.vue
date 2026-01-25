<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { usePilotStore } from '@/stores/pilotStore'

const pilotStore = usePilotStore()
const router = useRouter()

function debug() {
  pilotStore.pilotName = 'bpilot7991'
  pilotStore.balance = 100
  router.push('/dashboard')
}
</script>

<template>
  <div
    dir="rtl"
    class="absolute h-full w-full top-0 bg-[url('https://imagine-public.x.ai/imagine-public/images/d932199c-dc1e-4eda-acd9-5f290f753e26.jpg')] bg-cover bg-center"
  >
    <div class="absolute h-full w-full top-0 bg-overflow-200"></div>
    <div dir="ltr" class="absolute right-0 h-full bg-white p-10 w-150 rounded-s-lg">
      <h2 class="mb-10 font-bold text-2xl">Welcome back!</h2>
      <p class="text-text mb-0">Discord name</p>
      <input
        class="focus:border-button-600 focus:outline-none py-1 px-2 w-full border-2 rounded-sm border-button-300"
        type="text"
        placeholder="Enter your Discord username"
      />
      <p class="text-text mt-5">Password</p>
      <input
        class="focus:border-button-600 focus:outline-none py-1 px-2 w-full border-2 rounded-sm border-button-300"
        type="password"
        placeholder="Enter your password"
      />
      <button
        class="cursor-pointer hover:bg-text text-white mt-5 text-center w-full bg-button-600 rounded-sm py-2"
        @click="debug"
      >
        Sign in
      </button>
      <p class="text-text m-0 mt-5 mb-2 text-center w-full">Don't have an account?</p>
      <button
        class="cursor-pointer hover:bg-transparent hover:border-button-300 hover:border box-border py-2 w-full bg-button-300 rounded-sm"
      >
        Become a member
      </button>
    </div>
  </div>
  <div class="absolute bottom-4 right-4 flex justify-between">
    <h1 class="text-xl text-button-600 cursor-default">Celestia airways</h1>
  </div>
</template>
