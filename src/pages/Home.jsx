import React, { useEffect } from "react";
import { MovieListing } from "../components";
import { movieApi } from "../api/movieApi";
import { movieApiKey } from "../api/movieAPIKey";

export const Home = () => {
  useEffect(() => {
    const movieText = "Harry";
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apikey=${movieApiKey}&s=${movieText}&type=movie`)
        .catch((err) => console.log(err));
      console.log(response);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <MovieListing />
    </div>
  );
};
