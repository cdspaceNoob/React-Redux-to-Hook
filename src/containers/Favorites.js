import React from "react";
import { useContext } from "react";

import FavoriteItem from "../components/Favorites/FavoriteItem";
import { ProductContext } from "../context/product-context";
import "./Products.css";

const Favorites = (props) => {
  const favoriteProducts = useContext(ProductContext).products.filter(
    (product) => product.isFavorite === true
  );

  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
