export const allGames = (state) => {
  return state.games
}

export const allFavourites = (state) => {
  return state.favourites
}

export const getFavouritesCount = (state) => {
  return state.favourites.length
}

export const allFavouriteGames = (state) => {
  return state.games.filter(item => state.favourites.includes(item.id))
}



