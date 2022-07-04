import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieApi } from "../../api/movieApi";
import { movieApiKey } from "../../api/movieAPIKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await movieApi.get(
      `?apikey=${movieApiKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const response = await movieApi.get(
      `?apikey=${movieApiKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncMoviesOrShowsDetails = createAsyncThunk(
  "movies/fetchAsyncMoviesOrShowsDetails",
  async (id) => {
    const response = await movieApi.get(
      `?apikey=${movieApiKey}&i=${id}&Plot=full`
    );
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
  isLoading: false,
  favourite: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },

    // action to add movies to favourite array
    addToFavourite: (state, { payload }) => {
      state.favourite.push(payload);
    },

    // action to remove movies from favourite array
    removeFromFavourite: (state, { payload }) => {
      state.favourite = state.favourite.filter(
        ({ imdbID }) => imdbID !== payload
      );
    },

    // action to update the priority of favourite movie
    updateMoviePriority: (state, { payload }) => {
      console.log(payload);
      state.favourite = payload.isMovieInFavourite
        ? state.favourite.map((movie) =>
            movie.imdbID === payload.imdbID
              ? { ...movie, priority: payload.priority }
              : movie
          )
        : state.favourite;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      state.movies = payload;
      state.isLoading = false;
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      state.shows = payload;
    },
    [fetchAsyncMoviesOrShowsDetails.fulfilled]: (state, { payload }) => {
      state.selectedMovieOrShow = payload;
    },
  },
});

export const {
  removeSelectedMovieOrShow,
  addToFavourite,
  removeFromFavourite,
  updateMoviePriority,
} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) =>
  state.movies.selectedMovieOrShow;
export const getLoaderInfo = (state) => state.movies.isLoading;
export const getAllFavourite = (state) => state.movies.favourite;
export default movieSlice.reducer;
