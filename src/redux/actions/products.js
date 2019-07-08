import fetch from "cross-fetch";
import { PRODUCTS_FETCHED, PRODUCTS_LOADING } from "./types";

export function fetchProducts() {
  return dispatch => {
    dispatch({ type: PRODUCTS_LOADING });
    fetch("https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&image_sizes[]=365").then(
      response => {
        response.json().then(json => {
          dispatch({ type: PRODUCTS_FETCHED, payload: json.data });
        });
      }
    );
  };
}
