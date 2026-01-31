import { defineStore } from 'pinia'

export const useRouteStore = defineStore('route', {
  state: () => {
    return { number: 'AAA', from: 'AAA', to: 'AAA' }
  },

  actions: {
    setRoute(route: any) {
      this.number = route.flight_number
      this.from = route.from
      this.to = route.to
    },
  },

  //getters
})
