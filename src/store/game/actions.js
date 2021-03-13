export const isFavourite = ({getters}, id) => {
  return getters.allFavourites.includes(id)
}

export const toggleFavourite = (context, id) => {
  if (isFavourite(context, id)) {
    context.commit('removeFavourite', id)
  } else {
    context.commit('addFavourite', id)
  }
}
