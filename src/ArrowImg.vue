<script setup>
const arrowUp = new URL('@/assets/arrow_icons/up_arrow.png', import.meta.url).href
const arrowDown = new URL('@/assets/arrow_icons/down_arrow.png', import.meta.url).href
const arrowLeft = new URL('@/assets/arrow_icons/left_arrow.png', import.meta.url).href
const arrowRight = new URL('@/assets/arrow_icons/right_arrow.png', import.meta.url).href
const props = defineProps(['direction', 'darken'])

</script>

<template>
  <div :class="{
    'mx-[-5px]': (direction === 'U' || direction === 'D'),
    'relative': direction ==='R',
    'right-[-2px]': direction === 'R',
    'ml-[-2px]': direction === 'R',
    'brightness-50': darken,
  }">
    <img v-if="direction === 'U'" :src="arrowUp" />
    <img v-else-if="direction === 'D'" :src="arrowDown" />
    <img v-else-if="direction === 'L'" :src="arrowLeft" />
    <img v-else :src="arrowRight" />
  </div>
</template>