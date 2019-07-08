import React from "react";
import { push } from "connected-react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CategoriesListing from "../components/CategoriesListing";
import ProductListing from "../components/ProductListing";

const Home = props => (
  <div>
    <h1 className="title">Welcome to Gousto React Coding Test</h1>
    <p>
      <button onClick={() => props.changePage()}>
        Go to About page via router
      </button>
    </p>
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <CategoriesListing categories={props.categories} />
        </div>
        <div className="col-sm-8">
          <ProductListing products={props.products} />
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = ({ home }) => {
  return { categories: home.categories, products: home.categories };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push("/about-us")
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
