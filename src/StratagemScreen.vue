<script setup>
import { onMounted } from 'vue'
import ArrowImg from './ArrowImg.vue';
import { useScreenStore } from '@/stores/screen'

const screen = useScreenStore()
const stratagemIcon = new URL('@/assets/icons/120mm_barrage.png', import.meta.url).href
const input = ['R', 'R', 'D', 'L', 'R', 'D',]

const handleKeyDown = (e) => {
  if (e.key === 'ArrowUp') {
    screen.currentInput.push('U')
  }
  if (e.key === 'ArrowDown') {
    screen.currentInput.push('D')
  }
  if (e.key === 'ArrowRight') {
    screen.currentInput.push('R')
  }
  if (e.key === 'ArrowLeft') {
    screen.currentInput.push('L')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

</script>

<template>
  <div class="flex flex-col items-center m-auto gap-5">
    <div>
      <img :src="stratagemIcon" />
    </div>
    <div class="text-xl font-bold text-slate-300">Orbital 120MM HE Barrage</div>
    <div class="flex flex-row gap-1">
      <ArrowImg v-for="(direction, index) in input" :direction="direction" :key="index"></ArrowImg>
    </div>
  </div>
</template>