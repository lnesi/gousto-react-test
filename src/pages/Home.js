import React, { Component } from "react";
import { push } from "connected-react-router";
import { fetchCategories } from "../redux/actions/categories";
import { fetchProducts } from "../redux/actions/products";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CategoriesListing from "../components/CategoriesListing";
import ProductListing from "../components/ProductListing";

class Home extends Component {
  componentDidMount() {
    if (this.props.categories.loaded === false) this.props.fetchCategories();
    if (this.props.products.loaded === false) this.props.fetchProducts();
  }
  render() {
    return (
      <div>
        <h1 className="title">Welcome to Gousto React Coding Test</h1>
        <p>
          <button onClick={() => this.props.changePage()}>
            Go to About page via router
          </button>
        </p>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4 col-lg-3 col-xl-2">
              <h3>Categories</h3>
              <CategoriesListing
                {...this.props.categories}
                current={this.props.currentCategory}
              />
            </div>
            <div
              className="col-
            sm-8 col-lg-9 col-xl-10"
            >
              <h3>Products</h3>
              <ProductListing
                loading={this.props.products.loading}
                list={filterProducts(
                  this.props.products.list,
                  this.props.currentCategory
                )}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function filterProducts(product_list, category) {
  if (!category) return product_list;
  return product_list.filter(item => {
    return (
      item.categories.find(cat => {
        return cat.id === category.id;
      }) !== undefined
    );
  });
}
const mapStateToProps = ({ home }) => {
  return { ...home };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push("/about-us"),
      fetchCategories,
      fetchProducts
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
