import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieSlice";

export const movieStore = configureStore(
  {
    reducer: {
      movies: moviesReducer,
    },
  },
  // This snippet is just for redux dev tools in chrome
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
