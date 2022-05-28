import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../features/movies/movieSlice";
import { MovieCard } from "./MovieCard";

export const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = "";

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

  return (
    <div>
      <div className="my-5 mx-0">
        <h2 className="text-font-secondary font-semibold mt-2">Movies</h2>
        <div>{renderMovies}</div>
      </div>
    </div>
  );
};
