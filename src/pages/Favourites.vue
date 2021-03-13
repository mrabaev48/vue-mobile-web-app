<template>
  <q-page class="flex">
    <GameList
      v-bind:games="allFavouriteGames"
    />
  </q-page>
</template>

<script>
  import GameList from "components/GameList";
  import {mapGetters} from 'vuex'
export default {
  name: 'Favourites',
  components: {
    GameList
  },
  mounted() {
  },
  computed: {
    ...mapGetters('game', ['allFavouriteGames'])
  }
}
</script>

<style scoped>

</style>
