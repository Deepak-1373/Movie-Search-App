import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMoviesOrShowsDetails,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../features/movies/movieSlice";

export const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);

  useEffect(() => {
    dispatch(fetchAsyncMoviesOrShowsDetails(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="flex py-10 px-0 text-font-primary font-normal">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div>
            <div className="text-4xl text-font-primary">{data.Title}</div>
            <div className="flex pl-[3px] mt-5 text-font-secondary flex-wrap">
              <span className="mr-5 mt-3 flex items-center justify-center">
                IMDB Rating
                <span className="ml-2 text-yellow-500 material-symbols-outlined">
                  star
                </span>
                :{data.imdbRating}
              </span>
              <span className="mr-5 mt-3 flex items-center justify-center">
                IMDB Votes
                <span className="ml-2 material-symbols-outlined">thumb_up</span>
                :{data.imdbVotes}
              </span>
              <span className="mr-5 mt-3 flex items-center justify-center">
                Runtime
                <span className="ml-2 material-symbols-outlined">videocam</span>
                :{data.Runtime}
              </span>
              <span className="mr-5 mt-3 flex items-center justify-center">
                Year
                <span className="ml-2 material-symbols-outlined">
                  calendar_month
                </span>
                :{data.Year}
              </span>
            </div>
            <div className="mt-5 leading-7">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Genres</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <img src={data.Poster} alt={data.Title} />
        </>
      )}
    </div>
  );
};
