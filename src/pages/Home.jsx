import React, { useEffect } from "react";
import { MovieListing } from "../components";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../features/movies/movieSlice";

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
  });

  return (
    <div>
      <MovieListing />
    </div>
  );
};
