import React from "react";
import Preloader from "./Preloader";

const CategoriesListing = props => {
  if (props.loading) {
    return (
      <div className="CategoriesListing">
        <Preloader />
      </div>
    );
  } else {
    return (
      <div className="CategoriesListing">
        <ul className="list-group">
          {props.list.map(category => (
            <li
              key={category.id}
              className="list-group-item list-group-item-action"
              style={{ cursor: "pointer" }}
              role="link"
            >
              {category.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default CategoriesListing;
