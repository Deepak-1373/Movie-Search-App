import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addToFavourite,
  getAllFavourite,
  removeFromFavourite,
  updateMoviePriority,
} from "../features";
import { useEffect } from "react";

export const MovieCard = ({ data }) => {
  const [priority, setPriority] = useState("lower"); // making state for storing priority of each movie card
  const favouriteMovies = useSelector(getAllFavourite);
  const dispatch = useDispatch();

  // this checks if the data is currently in the favourite movies then set the correct priority of the data
  const isCurrentDataInFavouriteMovies = favouriteMovies.find(
    ({ imdbID }) => imdbID === data.imdbID
  );

  // this piece of code prevents the default behaviour of priority and helps it to be in sync with the selected favourite movie priority when switching between filters
  useEffect(() => {
    if (isCurrentDataInFavouriteMovies) {
      setPriority(isCurrentDataInFavouriteMovies.priority);
    }
    if (data?.priority) {
      setPriority(data.priority);
    }
  }, [data.priority, isCurrentDataInFavouriteMovies]);

  // checking if the current movie selected is already in favourite movies array or not
  const isMovieInFavourite = favouriteMovies.some(
    ({ imdbID }) => imdbID === data.imdbID
  );

  // favourite movie click handler
  const favouriteClickHandler = () => {
    // if the selected movie is already in the array then we are removing it from the array
    if (isMovieInFavourite) {
      dispatch(removeFromFavourite(data.imdbID));
    } else {
      // if the selected movie is not in favourite array then we are storing it in the array
      dispatch(
        addToFavourite({
          ...data,
          priority,
        })
      );
    }
  };

  // It handles the change in priority of the favourite movie
  const selectChangeHandler = (e) => {
    setPriority(e.target.value);
    if (isMovieInFavourite) {
      dispatch(
        updateMoviePriority({
          isMovieInFavourite,
          imdbID: data.imdbID,
          priority: e.target.value,
        })
      );
    }
  };

  return (
    <div className="bg-secondary-color max-w-[210px] mx-auto cursor-pointer transition-all duration-300 hover:scale-105 hover:transition-all hover:duration-300 min-h-[450px] h-full m-[10px]">
      <Link to={`/movie/${data.imdbID}`}>
        <div>
          {/* Add lazy loading effect for optimisation, faster initial load time and less data traffic */}
          <img
            width="200px"
            height="320px"
            className="w-full h-80 p-3"
            loading="lazy"
            src={data.Poster}
            alt={data.Title}
          />
          <div>
            <div className="text-font-primary p-3">
              <h4 className="text-xl mb-2 font-normal line-clamp">
                {data.Title}
              </h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>

      {/* Add favourite section to each movie card */}
      <div className="p-3 flex align-center justify-between">
        <select value={priority} onChange={selectChangeHandler}>
          <option value="lower">Lower</option>
          <option value="higher">Higher</option>
        </select>
        <button onClick={favouriteClickHandler} className="text-font-primary">
          {/* if movie is already selected then showing favourite icon */}
          {isMovieInFavourite ? (
            <span className="material-icons-outlined text-red-500">
              favorite
            </span>
          ) : (
            <>
              {/* if movie is not selected then showing different icon */}
              <span className="material-icons-outlined">favorite_border</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
