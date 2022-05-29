import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../features/movies/movieSlice";
import { MovieCard } from "./MovieCard";

export const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div>
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => <MovieCard key={index} data={show} />)
    ) : (
      <div>
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <div>
      <div className="my-5 mx-0">
        <h2 className="text-font-secondary text-2xl font-semibold mt-2">
          Movies
        </h2>
        <div className="grid grid-cols-16 gap-3">{renderMovies}</div>
      </div>
      <div className="my-5 mx-0 mt-3">
        <h2 className="text-font-secondary text-2xl font-semibold mt-2">
          Shows
        </h2>
        <div className="grid grid-cols-16 gap-3">{renderShows}</div>
      </div>
    </div>
  );
};
