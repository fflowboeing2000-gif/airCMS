<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/utilities/supabase'

const greet = ref('')

onMounted(async () => {
  const { data, error } = await supabase.functions.invoke('smooth-task', {
    body: { name: 'Functions' },
  })
  greet.value = data
})
</script>

<template>
  <h1>TEST EDGE FUNCTIONS!!! DEBUG</h1>
  <p>{{ greet.message }}</p>
</template>
