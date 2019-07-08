import fetch from "cross-fetch";
import _ from "lodash";
import make_slug from '../helpers/make_slug';
import { push } from "connected-react-router";
import {
  CATEGORIES_FETCHED,
  CATEGORIES_LOADING,
  CATEGORIES_SELECT
} from "./types";

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

export function selectCategoryById(categoryId) {
  return (dispatch, getState) => {
    const categories = getState().home.categories.list;
    const category = _.find(categories, { id: categoryId });
    if (category) {
      const slug = make_slug(category.title);
      dispatch(push(`/${slug}`));
    }
  };
}

export function selectCategoryBySlug(slug) {
  return (dispatch, getState) => {
    const categories = getState().home.categories.list;
    if (categories) {
      const category = _.find(categories, cat => {
        return make_slug(cat.title) === slug;
      });
      if (category) {

        dispatch({ type: CATEGORIES_SELECT, payload: category });
      }
    }
  };
}
