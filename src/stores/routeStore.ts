import { defineStore } from 'pinia'

export const useRouteStore = defineStore('route', {
  state: () => {
    return { number: 'AAA', from: 'AAA', to: 'AAA', distance: 30, index: 0.0 }
  },

  actions: {
    setRoute(route: any) {
      this.number = route.number
      this.from = route.from
      this.to = route.to
      this.distance = route.distance
      this.index = route.index
    },
  },

  //getters
})
