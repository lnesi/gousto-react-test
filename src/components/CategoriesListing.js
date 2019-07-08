import React from "react";
import Preloader from "./Preloader";
import make_slug from "../redux/helpers/make_slug";
import { Link } from "react-router-dom";
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
        <div className="list-group">
          {props.list.map(category => (
            <Link
              to={make_slug(category.title)}
              key={category.id}
              className={
                "list-group-item list-group-item-action " +
                (props.current && props.current.id === category.id
                  ? "active"
                  : "")
              }
              style={{ cursor: "pointer" }}
            >
              {category.title}
            </Link>
          ))}
        </div>
      </div>
    );
  }
};

export default CategoriesListing;
