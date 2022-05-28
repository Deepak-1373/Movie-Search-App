import React, { useEffect } from "react";
import { MovieListing } from "../components";
import { movieApi } from "../api/movieApi";
import { movieApiKey } from "../api/movieAPIKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../features/movies/movieSlice";

export const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apikey=${movieApiKey}&s=${movieText}&type=movie`)
        .catch((err) => console.log(err));
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <MovieListing />
    </div>
  );
};
