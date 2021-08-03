import { useReducer } from "react";
import { cleanLocalStorage, loadFavoriteProducts, persistFavoriteProduct, removeFavoriteProductFromLocalStorage } from "../../utils/localStorageManager";
import FavoriteProductContext from "./favoriteProductContext";
import FavoriteProductReducer from "./favoriteProductReducer";
import { ADD_FAVORITE_PRODUCT, REMOVE_ALL, REMOVE_FAVORITE_PRODUCT } from "./favoriteProductTypes";

const FavoriteProductState = props => {

  const initialState = {
    favoriteProducts: loadFavoriteProducts()
  }

  const [state, dispatch] = useReducer(FavoriteProductReducer, initialState);

  const addFavoriteProduct = product => {
    persistFavoriteProduct(product);
    dispatch({
      type: ADD_FAVORITE_PRODUCT,
      payload: product
    })
  }

  const removeFavoriteProduct = productId => {
    removeFavoriteProductFromLocalStorage(productId);
    dispatch({
      type: REMOVE_FAVORITE_PRODUCT,
      payload: productId
    })
  }

  const removeAll = () => {
    cleanLocalStorage();
    dispatch({
      type: REMOVE_ALL
    })
  }

  return (
    <FavoriteProductContext.Provider
      value={{
        favoriteProducts: state.favoriteProducts,
        addFavoriteProduct,
        removeFavoriteProduct,
        removeAll
      }}
    >
      {props.children}
    </FavoriteProductContext.Provider>
  );  
}

export default FavoriteProductState;