import _ from "lodash";

export default function filter_products(product_list, category, searchTerm) {
  let list = filter_products_by_category(product_list, category);
  list = search(list, searchTerm);
  return list;
}
function filter_products_by_category(product_list, category) {
  if (!category) return product_list;
  return product_list.filter(item => {
    return (
      item.categories.find(cat => {
        return cat.id === category.id;
      }) !== undefined
    );
  });
}

const searchable_fields = ["title", "description"];

function search(dataArray, term) {
  if (term.trim().length < 1) return dataArray; //exit if empty
  var results = [];
  dataArray.forEach(dataEntry => {
    searchable_fields.forEach(field => {
      let rel = getRelevance(dataEntry[field], term); // check if there are matches
      if (rel !== 0) {
        let resultEntryIndex = _.findIndex(results, { entry: dataEntry });
        if (resultEntryIndex === -1) {
          //Chech if is already added to results by match in a prev field.
          results.push({ relevance: rel, entry: dataEntry }); // matches found, add to results and store relevance
        } else {
          results[resultEntryIndex].relevance += rel; //If is already there we add add the relvances necause founded in more than one field.
        }
      }
    });
  });

  results.sort(compareRelevance); // sort by relevance
  results = results.map(item => item.entry);

  return results;
}

function getRelevance(value, keyword) {
  value = value.toLowerCase(); // lowercase to make search not case sensitive
  keyword = keyword.toLowerCase();

  var index = value.indexOf(keyword); // index of the keyword
  var word_index = value.indexOf(" " + keyword); // index of the keyword if it is not on the first index, but a word

  if (index === 0)
    // value starts with keyword (eg. for 'Dani California' -> searched 'Dan')
    return 3;
  // highest relevance
  else if (word_index !== -1)
    // value doesnt start with keyword, but has the same word somewhere else (eg. 'Dani California' -> searched 'Cali')
    return 2;
  // medium relevance
  else if (index !== -1)
    // value contains keyword somewhere (eg. 'Dani California' -> searched 'forn')
    return 1;
  // low relevance
  else return 0; // no matches, no relevance
}

function compareRelevance(a, b) {
  return b.relevance - a.relevance;
}
