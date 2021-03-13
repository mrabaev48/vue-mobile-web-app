export const addFavourite = (state, id) => {
  state.favourites.push(id)
  localStorage.setItem('favourites', JSON.stringify(state.favourites))
}

export const removeFavourite = (state, id) => {
  state.favourites = state.favourites.filter(x => x !== id)
  localStorage.setItem('favourites', JSON.stringify(state.favourites))
}

