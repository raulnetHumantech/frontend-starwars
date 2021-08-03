import React, { useEffect, useCallback, useMemo,useState } from "react";
import axios from "axios";

import image from "../assets/luke.jpg";
import { Link } from "react-router-dom";

const API_URL = "https://swapi.dev/api";
const ProductPage = () => {
  const regex = /(\d+)/g;
  const [products, saveProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`${API_URL}/people`);
      const total = response.data["count"];
      let productFetch = [];
      for (let i = 1; i < total/10; i++) {
        const responsePerPage = await axios.get(`${API_URL}/people/?page=${i}`);
        const productsReturned = responsePerPage.data["results"];
        productFetch = [...productFetch, ...productsReturned];
      }
      saveProducts(productFetch)
    };
    fetchProducts();
  }, []);

  return (
    <div className="ui grid container">
    {(Object.keys(products).length === 0 && <div>...Loading</div>) ||
      products.map(({ title, name, height, mass, birth_year, url, gender }) => (
        <div
        
       
          className="ui placeholder segment"
        >
      <div className="four wide column" key={`${url.match(regex)}`}>
        <Link to={`/actor/${`${url.match(regex)}`}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={name} />
              </div>
              <div className="content">
                <div className="header">Name: {name}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
        </div>
      ))}
  </div>
  );
};

export default ProductPage;
