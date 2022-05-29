import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieApi } from "../../api/movieApi";
import { movieApiKey } from "../../api/movieAPIKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const response = await movieApi.get(
      `?apikey=${movieApiKey}&s=${movieText}&type=movie`
    );
    return response.data;
  }
);

const initialState = {
  movies: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Succesfully");
      return { ...state, movies: payload };
    },
  },
  [fetchAsyncMovies.rejected]: () => {
    console.log("Rejected");
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
