import {ADD_FAVORITE_PRODUCT, REMOVE_ALL, REMOVE_FAVORITE_PRODUCT} from './favoriteProductTypes';

const FavoriteProductReducer = (state, action) => {
  switch (action.type) {
    case ADD_FAVORITE_PRODUCT:
      return {
        ...state,
        favoriteProducts: [action.payload, ...state.favoriteProducts]
      }
    case REMOVE_FAVORITE_PRODUCT:
      return {
        ...state,
        favoriteProducts: state.favoriteProducts.filter(({id}) => id !== action.payload)
      }
    case REMOVE_ALL:
      return {
        ...state,
        favoriteProducts: []
      }
    default:
      return state;
  }
}

export default FavoriteProductReducer;