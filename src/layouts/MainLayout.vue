<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          Mobile Web App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </q-page-container>

    <q-footer elevated class="bg-white text-light-blue-12">
      <q-toolbar>
        <q-btn class="btn main-page-btn" to="/" label="all games" flat color="primary"/>
        <q-btn class="btn favourites-page-btn" to="/favourites" :label="`favourites (${this.getFavouritesCount})`" flat color="primary"/>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>

  import {mapGetters} from 'vuex'
  export default {
    name: 'MainLayout',
    computed: {
      ...mapGetters('game', ['getFavouritesCount']),
    },
  }
</script>

<style scoped>
  .btn {
    width: 50%;
  }
</style>
