import React from "react";

const ProductTile = props => (
  <div className=" col-sm col-sm-12 col-md-6 col-lg-4 col-xl-2">
    <div className=" card">
      <img className="..." class="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  </div>
);
export default ProductTile;
