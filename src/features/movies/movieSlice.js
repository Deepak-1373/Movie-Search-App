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
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: (state) => {
      console.log("Pending");
      return { ...state, isLoading: true };
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Async Movies Succesfully");
      return { ...state, movies: payload, isLoading: false };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched Async Shows Succesfully");
      return { ...state, shows: payload };
    },
    [fetchAsyncMoviesOrShowsDetails.fulfilled]: (state, { payload }) => {
      console.log("Fetched Async Shows Succesfully");
      return { ...state, selectedMovieOrShow: payload };
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) =>
  state.movies.selectedMovieOrShow;
export const getLoaderInfo = (state) => state.movies.isLoading;
export default movieSlice.reducer;
