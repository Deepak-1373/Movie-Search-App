import React, { useEffect } from "react";
import { MovieListing } from "../components";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../features";

export const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
  }, [dispatch]);

  return (
    <div>
      <MovieListing />
    </div>
  );
};
