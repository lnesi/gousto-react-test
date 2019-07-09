import React, { useState } from "react";

const ProductTile = props => {
  const [open, setOpen] = useState(props.open);
  let imageSource = "https://via.placeholder.com/400x267";
  if (props.images["365"] !== null) imageSource = props.images["365"].src;
  return (
    <div className="ProductTile col-sm col-sm-12 col-md-6 col-lg-4 col-xl-3">
      <div className=" card">
        <img src={imageSource} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <h5
            className="title card-title"
            style={{ fontWeight: open ? "bold" : "normal" }}
            onClick={() => {
              setOpen(!open);
            }}
          >
            {props.title}
          </h5>
          <p className={"description card-text " + (open ? "" : "hidden")}>
            {props.description}
          </p>
          <p className="card-text">
            <small className="text-muted">Price</small>{" "}
            <span className="price">{props.list_price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

ProductTile.defaultProps = {
  open: false
};
export default ProductTile;
