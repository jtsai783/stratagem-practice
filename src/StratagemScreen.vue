<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import ArrowImg from './ArrowImg.vue';
import { useScreenStore } from '@/stores/screen'

const screen = useScreenStore()
const stratagemIcon = new URL('@/assets/icons/120mm_barrage.png', import.meta.url).href
const input = ['R', 'R', 'D', 'L', 'R', 'D',]

const handleKeyDown = (e) => {
  let currentLength = screen.currentInput.length

  if (e.key === 'ArrowUp' && input[currentLength] === 'U') {
    screen.currentInput.push('U')
  } else if (e.key === 'ArrowDown' && input[currentLength] === 'D') {
    screen.currentInput.push('D')
  } else if (e.key === 'ArrowRight' && input[currentLength] === 'R') {
    screen.currentInput.push('R')
  } else if (e.key === 'ArrowLeft' && input[currentLength] === 'L') {
    screen.currentInput.push('L')
  } else {
    screen.currentInput = []
  }

  if (screen.currentInput.length === input.length) {
    screen.currentInput = []
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown)
})

</script>

<template>
  <div class="flex flex-col items-center m-auto gap-5">
    <div>
      <img :src="stratagemIcon" />
    </div>
    <div class="text-xl font-bold text-slate-300">Orbital 120MM HE Barrage</div>
    <div class="flex flex-row gap-1">
      <ArrowImg v-for="(direction, index) in input" :direction="direction" :key="index"
        :darken="screen.currentInput[index] === direction"></ArrowImg>
    </div>
  </div>
</template>