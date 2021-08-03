import React, { useCallback, useContext } from "react";

import { Fragment } from "react";
import image from "../../assets/luke.jpg";
import Product from "../../components/product/Products";
import FavoriteProductContext from "../../context/favoriteProduct/favoriteProductContext";

const FavoriteProducts = (props) => {
  const favoriteProductContext = useContext(FavoriteProductContext);
  const { favoriteProducts, removeAll } = favoriteProductContext;
  const regex = /(\d+)/g;
  if (favoriteProducts.length === 0) {
    return (
      <div className="ui grid container">
        <h1>no tienes actores favoritos </h1>
      </div>
    );
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const onRemoveAllFavoriteProduct = useCallback(() => {
    removeAll();
  }, []);

  return (
    <Fragment>
      <div className="ui grid container">
        <div className="row">
          <div>
            <button
              onClick={onRemoveAllFavoriteProduct}
              className="ui primary button"
            >
              Remove All Favorite
            </button>
          </div>
        </div>
        <div className="row">
          {favoriteProducts.map((product) => {
            const id = `${product.url.match(regex)}`;
            return (
              <Product
                key={`${product.url.match(regex)}:${product.name
                  .split(" ")
                  .join("_")}`}
                name={product.name}
                id={id}
                image={image}
              />
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default FavoriteProducts;
