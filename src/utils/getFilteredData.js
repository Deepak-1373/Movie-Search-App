export const getFilteredMovies = (movies, favouriteMovies, sortByType) => {
  switch (sortByType.toUpperCase()) {
    case "ALL":
      return movies;

    case "ONLY_FAVOURITES":
      return favouriteMovies;

    case "FILTER_BY_HIGHER_PRIORITY":
      return favouriteMovies.filter(({ priority }) => priority === "higher");

    case "FILTER_BY_LOWER_PRIORITY":
      return favouriteMovies.filter(({ priority }) => priority === "lower");

    default:
      throw new Error(`${sortByType} not found.`);
  }
};
