import axios from "axios";
import React, { useEffect, useState } from "react";
import image from "../assets/luke.jpg";

const API_URL = "https://swapi.dev/api";

const View = (props) => {
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

  console.log(products);

  return (
    <div className="ui grid container">
      {(Object.keys(products).length === 0 && <div>...Loading</div>) ||
        products.map(({ title, name, height, mass, birth_year, url, gender }) => (
          <div
            key={`${url.match(regex)}:${name.split(" ").join("_")}`}
            className="ui placeholder segment"
          >
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={image} />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <div className="ui teal tag label">{name}</div>
                  </h2>
                  <p>Height: {height} cm.</p>
                  <p>Weight: {mass} kg.</p>
                  <p>Date of birth: {birth_year}</p>
                  <p>Gender: {gender}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default View;
