import make_slug from './make_slug';
import _ from "lodash";


export default function selectCategory(categories, slug) {
  const category = _.find(categories, cat => {
    return "/" + make_slug(cat.title) === slug;
  });
  if (category) return category;
  return null;
}
