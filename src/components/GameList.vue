<template>
  <div class="games">
    <GameItem
      v-for="game in games"
      v-bind:game="game"
      :key="game.id"
    />
  </div>
</template>

<script>
  import GameItem from 'components/GameItem'

  export default {
    name: 'Games',
    props: ['games'],
    components: {
      GameItem
    }
  }
</script>

<style scoped>

</style>
