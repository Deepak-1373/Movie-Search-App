import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieApi } from "../../api/movieApi";
import { movieApiKey } from "../../api/movieAPIKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await movieApi.get(
      `?apikey=${movieApiKey}&s=${term}&type=movie`
    );
    return response.data.Search;
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
  movies: [],
  selectedMovieOrShow: {},
  isLoading: false,
  favourite: JSON.parse(localStorage.getItem("favouriteMovies")) ?? [],
  sortBy: "all",
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
      localStorage.setItem("favouriteMovies", JSON.stringify(state.favourite));
    },

    // action to remove movies from favourite array
    removeFromFavourite: (state, { payload }) => {
      state.favourite = state.favourite.filter(
        ({ imdbID }) => imdbID !== payload
      );
      localStorage.setItem("favouriteMovies", JSON.stringify(state.favourite));
    },

    // action to update the priority of favourite movie
    updateMoviePriority: (state, { payload }) => {
      state.favourite = payload.isMovieInFavourite
        ? state.favourite.map((movie) =>
            movie.imdbID === payload.imdbID
              ? { ...movie, priority: payload.priority }
              : movie
          )
        : state.favourite;
      localStorage.setItem("favouriteMovies", JSON.stringify(state.favourite));
    },

    // action to handle the data filtered on basis of priority and favourites
    updateSortByType: (state, { payload }) => {
      state.sortBy = payload;
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
      alert("There is some issue with the server, please try later!");
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
  updateSortByType,
} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getSelectedMovieOrShow = (state) =>
  state.movies.selectedMovieOrShow;
export const getLoaderInfo = (state) => state.movies.isLoading;
export const getAllFavourite = (state) => state.movies.favourite;
export const sortBy = (state) => state.movies.sortBy;
export default movieSlice.reducer;
