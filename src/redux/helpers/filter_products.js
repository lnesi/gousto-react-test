export default function filtet_products(product_list, category) {
  if (!category) return product_list;
  return product_list.filter(item => {
    return (
      item.categories.find(cat => {
        return cat.id === category.id;
      }) !== undefined
    );
  });
}
