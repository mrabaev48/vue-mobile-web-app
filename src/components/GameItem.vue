<template>
  <div class="game-block">
    <div class="game-title text-h6 col">{{game.title}}</div>
    <div class="game-body">
      <div class="image-block">
        <q-img
          :src="getImage(game.id)"
          spinner-color="primary"
          spinner-size="82px"
          class="image"
        />
      </div>
      <div class="game-buttons">
        <q-btn
          size="lg"
          class="setFavouriteBtn"
          flat
          round
          :color="allFavourites.includes(game.id) ? 'red': 'primary'"
          icon="favorite"
          @click="toggleFavourite(game.id)"
        />
        <q-btn
          outline
          :disable="!game.hasDemo"
          :color="!game.hasDemo ? 'grey' : 'primary'"
          label="Demo"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'GameItem',
    props: ['game'],
    computed: {
      ...mapGetters('game', ['allFavourites'])
    },
    methods: {
      ...mapActions('game', ['toggleFavourite', 'isFavourite']),
      getImage: (id) => {
        // return `https://i.picsum.photos/id/${id}/200/200.jpg` actually this link doesn't work. So i decided to use dummyimage service
        return 'https://dummyimage.com/300x200/000/fff.png'
      }
    }
  }
</script>

<style scoped>
  .game-block {
    margin: 0.7rem 2rem;
    width: 100%;
  }

  .image {
    height: 200px;
    width: 270px;
  }

  .game-body {
    display: flex;
  }

  .game-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 1rem;
  }
</style>
