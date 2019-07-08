import React from "react";

const ProductTile = props => {
  let imageSource = "https://via.placeholder.com/400x267";
  if (props.images["365"] !== null) imageSource = props.images["365"].src;
  return (
    <div className="ProductTile col-sm col-sm-12 col-md-6 col-lg-4 col-xl-2">
      <div className=" card">
        <img src={imageSource} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
        </div>
      </div>
    </div>
  );
};
export default ProductTile;
