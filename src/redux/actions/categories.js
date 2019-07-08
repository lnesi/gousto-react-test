import fetch from "cross-fetch";
import _ from "lodash";
import make_slug from "../helpers/make_slug";
import { push } from "connected-react-router";
import { CATEGORIES_FETCHED, CATEGORIES_LOADING } from "./types";

export function fetchCategories() {
  return dispatch => {
    dispatch({ type: CATEGORIES_LOADING });
    fetch("https://api.gousto.co.uk/products/v2.0/categories").then(
      response => {
        response.json().then(json => {
          dispatch({ type: CATEGORIES_FETCHED, payload: json.data });
        });
      }
    );
  };
}
