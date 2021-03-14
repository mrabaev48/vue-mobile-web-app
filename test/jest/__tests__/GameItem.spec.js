import {createLocalVue, mount, shallowMount} from "@vue/test-utils";
import Vuex from 'vuex'
import {mockStore} from "./utils/StoreHelper";
import GameItem from "components/GameList";
import GameList from "components/GameList";

const localVue = createLocalVue()
localVue.use(Vuex)

describe('GameItem', () => {

  let store

  beforeEach(() => {
    store = new Vuex.Store({
      ...mockStore()
    })
  })

  it('Mount game item', () => {
    const wrapper = shallowMount(GameItem, {store, localVue})
    expect(wrapper).toBeTruthy();
  })
})
