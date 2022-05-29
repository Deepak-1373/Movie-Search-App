import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMoviesOrShowsDetails,
  getSelectedMovieOrShow,
} from "../features/movies/movieSlice";

export const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  console.log(data);

  useEffect(() => {
    dispatch(fetchAsyncMoviesOrShowsDetails(imdbID));
  }, [dispatch, imdbID]);
  return <div>MovieDetail</div>;
};
