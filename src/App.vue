<script setup>
const superEarthIcon = new URL('@/assets/superearth.png', import.meta.url).href
import StartScreen from './StartScreen.vue';
import StratagemScreen from './StratagemScreen.vue'
import {useScreenStore} from '@/stores/screen'

const screen = useScreenStore()

</script>

<template>
  <div class="basis-3/5 flex-auto relative">
    <div class="h-full relative bg-black/75 isolate z-10">
      <div class="h-full py-16">
        <div class="border-y-8 border-white h-full flex items-center">
          <StartScreen v-if="screen.currentScreen === 'start'"></StartScreen>
          <StratagemScreen v-else></StratagemScreen>
        </div>
      </div>
    </div>
    <div class="h-full w-dvw bg-zinc-600 isolate absolute top-0 z-0">
      <img :src="superEarthIcon" class="brightness-75 m-auto relative vertical-center w-5/6">
    </div>
  </div>
  <div class="basis-2/5 flex-auto">
    soft keyboard section
  </div>
</template>