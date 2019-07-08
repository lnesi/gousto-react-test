import slugify from "slugify";
export default function make_slug(term) {
  return slugify(term, {
    replacement: "-", // replace spaces with replacement
    remove: null, // regex to remove characters
    lower: true // result in lower case
  });
}
