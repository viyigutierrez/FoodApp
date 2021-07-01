function filter(searched1, filters) {
  return searched1.filter(
    (recipe) => recipe?.diets.indexOf(filters[filters.length - 1]) !== -1
  );
}

export default filter;
