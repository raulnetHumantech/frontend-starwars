import React, { useCallback, useContext, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
import image1 from "../assets/luke.jpg";
import FavoriteProductContext from "../context/favoriteProduct/favoriteProductContext";

const ProductDetails = () => {
  const favoriteProductContext = useContext(FavoriteProductContext);
  const { addFavoriteProduct } = favoriteProductContext;
  const regex = /(\d+)/g;

  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { title, mass, name, height, birth_year } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://swapi.dev/api/people/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  const onSelectFavoriteProduct = useCallback(() => {
    product.id = `${product.url.match(regex)}`;
    addFavoriteProduct(product);
  }, [product]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image1} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">{name}</a>
                </h2>

                <p>Height: {height} cm.</p>
                <p>Weight: {mass} kg.</p>
                <p>Date of birth: {birth_year}</p>

                <div
                  onClick={onSelectFavoriteProduct}
                  className="ui vertical animated button"
                  tabIndex="0"
                >
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add Favorites</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
