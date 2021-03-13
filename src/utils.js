// eslint-disable-next-line no-unused-vars
export function isFavourite (id) {
  const savedFavourites = getFavourites()
  if (!savedFavourites.length) {
    return false
  }
  if (!savedFavourites.filter(x => x === id).length) {
    return false
  }
  return true
}

// eslint-disable-next-line no-unused-vars
export function setFavourite (id) {
  const favourites = getFavourites()
  const updated = [id, ...favourites]
  localStorage.setItem('favourites', JSON.stringify(updated))
}

// eslint-disable-next-line no-unused-vars
export function removeFavourite (id) {
  const favourites = getFavourites()
  const updated = favourites.filter(x => x !== id)
  localStorage.setItem('favourites', JSON.stringify(updated))
}

export function getFavourites () {
  return JSON.parse(localStorage.getItem('favourites') || '[]')
}
