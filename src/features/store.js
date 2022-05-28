import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieSlice";

export const movieStore = configureStore({
  reducer: moviesReducer,
});
