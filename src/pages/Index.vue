<template>
  <q-page class="flex">
    <GameList
      v-bind:games="allGames"
    />
  </q-page>
</template>

<script>
import GameList from 'components/GameList'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'PageIndex',
  components: {
    GameList
  },
  computed: {
    ...mapGetters('game', ['allGames'])
  }
}
</script>
