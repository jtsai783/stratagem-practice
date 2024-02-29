import { defineStore } from 'pinia'

export const useScreenStore = defineStore('screen', {
  state: () => {
    return {
      currentScreen: 'bleh',
      currentInput: []
    }
  }
})
