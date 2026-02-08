<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/utilities/supabase'

const router = useRouter()

onMounted(async () => {})

async function signInWithDiscord() {
  await supabase.auth.signInWithOAuth({
    provider: 'discord',
    options: {
      redirectTo: 'http://localhost:5173/dashboard',
    },
  })
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

      <button
        class="flex justify-center gap-3 cursor-pointer box-border py-2 w-full bg-[#5865F2] text-white rounded-sm"
        @click="signInWithDiscord"
      >
        Sign in with
        <img
          width="120"
          src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66e3d718355f9c89eb0fd350_Logo.svg"
          alt=""
        />
      </button>

      <p class="text-text m-0 mt-5 mb-2 text-center w-full">Don't have an account?</p>
      <RouterLink to="/signup">
        <button
          class="cursor-pointer hover:bg-transparent hover:border-button-300 hover:border box-border py-2 w-full bg-button-300 rounded-sm"
        >
          Become a member
        </button>
      </RouterLink>
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
