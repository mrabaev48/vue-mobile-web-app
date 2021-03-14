import {createLocalVue, mount, shallowMount} from "@vue/test-utils";
import Vuex from 'vuex'
import GameList from "components/GameList";
import {mockStore} from "./utils/StoreHelper";

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Game list', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      ...mockStore()
    })
  })

  it('Mount game list without errors', () => {
    const wrapper = mount(GameList, {
      propsData: {
        games: []
      }
    })
    expect(wrapper).toBeTruthy();
  })

  it('Mount game list with elements inside', () => {
    const wrapper = shallowMount(GameList, {store, localVue})
    expect(wrapper).toBeTruthy();
  })
})
