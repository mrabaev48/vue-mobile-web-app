export const mockStore = () => {
  const actions = {
    isFavourite: jest.fn(),
    toggleFavourite: jest.fn()
  }

  const state = {
    games: [
      {
        "title": "Game 1",
        "id": 251,
        "hasDemo": true
      },
      {
        "title": "Game 2",
        "id": 200,
        "hasDemo": false
      }
    ],
    favourites: []
  }

  const getters = {
    allGames: () => this.state.games,
    allFavourites: () => this.state.favourites,
    getFavouritesCount: () => this.state.favourites.length,
    allFavouriteGames: () => this.state.games.filter(item => this.state.favourites.includes(item.id))
  }

  return {
    state,
    actions,
    getters
  }
}
