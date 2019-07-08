import {
  CATEGORIES_FETCHED,
  CATEGORIES_LOADING,
  PRODUCTS_FETCHED,
  PRODUCTS_LOADING
} from "../actions/types";
import select_category from "../helpers/select_category";

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
        currentCategory: select_category(
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
        currentCategory: select_category(action.payload, state.route)
      };
    default:
      return state;
  }
};
