import React from "react";
import { sortBy, updateSortByType } from "../features";
import { useSelector, useDispatch } from "react-redux";

export const SelectBox = () => {
  const currentSortByType = useSelector(sortBy);
  const dispatch = useDispatch();

  const changeSelectHandler = (e) => {
    dispatch(updateSortByType(e.target.value));
  };

  return (
    <select
      value={currentSortByType}
      onChange={changeSelectHandler}
      className="p-2"
    >
      <option value="all">All</option>
      <option value="only_favourites">Only Favourites</option>
      <option value="filter_by_higher_priority">
        Filter by higher priority
      </option>
      <option value="filter_by_lower_priority">Filter by lower priority</option>
    </select>
  );
};
