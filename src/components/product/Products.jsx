import { Fragment, useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import FavoriteProductContext from "../../context/favoriteProduct/favoriteProductContext";

const Product = (props) => {
  const favoriteProductContext = useContext(FavoriteProductContext);
  const { removeFavoriteProduct } = favoriteProductContext;

  const onRemoveFromFavoriteProduct = useCallback(() => {
    removeFavoriteProduct(props.id);
  }, []);

  return (
    <Fragment>
      <div className="four wide column" key={props.id}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={props.image} alt={props.name} />
            </div>
            <div className=" middle aligned content">
              <Link to={`/actor/${props.id}`}>
                <div className="content">
                  <div className="header">Name: {props.name}</div>
                </div>
              </Link>
              <button
                onClick={onRemoveFromFavoriteProduct}
                className="ui red button"
              >
                Remove Favorite
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Product;
