import Vue from 'vue'
import Map from '@/components/Map'

describe('Map.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Map)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h5').textContent)
      .toEqual('map')
  })
})
