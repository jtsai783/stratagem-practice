<script setup>
const superEarthIcon = new URL('@/assets/superearth.png', import.meta.url).href
</script>

<template>
  <div class="h-dvh w-dvw bg-gray-500">
    <img :src="superEarthIcon"> 
  </div>
</template>