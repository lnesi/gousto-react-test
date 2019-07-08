import {
  CATEGORIES_FETCHED,
  CATEGORIES_LOADING,
  PRODUCTS_FETCHED,
  PRODUCTS_LOADING
} from "../actions/types";

const initialState = {
  categories: { list: [], loading: false, loaded: false },
  products: { list: [], loading: false, loaded: false }
};
export default (state = initialState, action) => {
  switch (action.type) {
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
        categories: { loading: false, loaded: true, list: action.payload }
      };
    default:
      return state;
  }
};
