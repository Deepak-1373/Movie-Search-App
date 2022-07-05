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

    // case to handle suggested movies based on the favourite movies of the user
    case "OTHER_MOVIES_YOU_MIGHT_LIKE": {
      let titleSet = new Set();
      favouriteMovies.forEach(({ Year }) => {
        titleSet.add(Number(Year));
      });

      let minimumYear = Math.min(...titleSet);
      let maximumYear = Math.max(...titleSet);

      let favouriteMovieId = new Set();
      favouriteMovies.forEach(({ imdbID }) => {
        favouriteMovieId.add(imdbID);
      });

      return movies.filter(
        ({ Year, imdbID }) =>
          !favouriteMovieId.has(imdbID) &&
          Year >= minimumYear &&
          Year <= maximumYear
      );
    }

    default:
      throw new Error(`${sortByType} not found.`);
  }
};
