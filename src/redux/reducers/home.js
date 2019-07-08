import {
  CATEGORIES_FETCHED,
  CATEGORIES_LOADING,
  PRODUCTS_FETCHED,
  PRODUCTS_LOADING
} from "../actions/types";
import make_slug from "../helpers/make_slug";
import _ from "lodash";

const initialState = {
  categories: { list: [], loading: false, loaded: false },
  products: { list: [], loading: false, loaded: false },
  currentCategory: null,
  route: "/"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "@@router/LOCATION_CHANGE":
      return {
        ...state,
        route: action.payload.location.pathname,
        currentCategory: selectCategory(
          state.categories.list,
          action.payload.location.pathname
        )
      };
    case PRODUCTS_LOADING:
      return {
        ...state,
        products: { loading: true, loaded: false, list: [] }
      };
    case PRODUCTS_FETCHED:
      return {
        ...state,
        products: { loading: false, loaded: true, list: action.payload }
      };
    case CATEGORIES_LOADING:
      return {
        ...state,
        categories: { loading: true, loaded: false, list: [] }
      };
    case CATEGORIES_FETCHED:
      return {
        ...state,
        categories: {
          loading: false,
          loaded: true,
          list: action.payload
        },
        currentCategory: selectCategory(action.payload, state.route)
      };
    default:
      return state;
  }
};

function selectCategory(categories, slug) {
  const category = _.find(categories, cat => {
    return "/" + make_slug(cat.title) === slug;
  });
  if (category) return category;
  return null;
}
