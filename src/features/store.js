import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieSlice";

export const movieStore = configureStore(
  {
    reducer: {
      movies: moviesReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
