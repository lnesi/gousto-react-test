import React, { useState } from "react";

const ProductTile = props => {
  const [open, setOpen] = useState(false);
  let imageSource = "https://via.placeholder.com/400x267";
  if (props.images["365"] !== null) imageSource = props.images["365"].src;
  return (
    <div className="ProductTile col-sm col-sm-12 col-md-6 col-lg-4 col-xl-3">
      <div className=" card">
        <img src={imageSource} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <h5
            className="card-title"
            style={{ fontWeight: open ? "bold" : "normal" }}
            onClick={() => {
              setOpen(!open);
            }}
          >
            {props.title}
          </h5>
          {open && <p className="card-text">{props.description}</p>}
          <p className="card-text"><small className="text-muted">Price</small> &pound;{props.list_price}</p>
        </div>
      </div>
    </div>
  );
};
export default ProductTile;
