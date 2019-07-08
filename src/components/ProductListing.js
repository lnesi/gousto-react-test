import React from "react";
import Preloader from "./Preloader";
import ProductTile from "./ProductTile";

const ProductListing = props => {
  if (props.loading) {
    return (
      <div className="ProductListing">
        <Preloader />
      </div>
    );
  } else {
    return (
      <div className="ProductListing row">
        {props.list.map(product => {
          return <ProductTile {...product} key={product.id} />;
        })}
      </div>
    );
  }
};
export default ProductListing;
