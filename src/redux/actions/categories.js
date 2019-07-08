import axios from "axios";
import { CATEGORIES_FETCHED } from "./types";

export function fetchCategories() {
  return dispatch => {
    axios
      .get("https://api.gousto.co.uk/products/v2.0/categories")
      .then(resonse => {
        dispatch({ type: CATEGORIES_FETCHED, payload: response.data.data });
      });
  };
}
