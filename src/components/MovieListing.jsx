import React from "react";
import { useSelector } from "react-redux";
import {
  sortBy,
  getAllMovies,
  getLoaderInfo,
  getAllFavourite,
} from "../features/movies/movieSlice";
import { getFilteredMovies } from "../utils/getFilteredData";
import { MovieCard } from "./MovieCard";
import { TailSpin } from "react-loader-spinner";
import { SelectBox } from "./SelectBox";

export const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const isLoading = useSelector(getLoaderInfo);
  const sortByType = useSelector(sortBy);
  const favouriteMovies = useSelector(getAllFavourite);

  const filteredMovies = getFilteredMovies(movies, favouriteMovies, sortByType);

  return (
    <div>
      {isLoading ? (
        <TailSpin color="#00BFFF" height={80} width={80} />
      ) : (
        <>
          <div className="my-5 mx-0">
            <div className="mr-3 flex gap-4 justify-between items-center">
              <h2 className="text-font-secondary text-2xl font-semibold mt-2 mr-3">
                Movies
              </h2>
              <SelectBox />
            </div>
            <div className="grid-layout">
              {filteredMovies.map((movie, index) => (
                <MovieCard key={index} data={movie} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
