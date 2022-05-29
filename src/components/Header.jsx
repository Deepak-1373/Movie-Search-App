import React, { useState } from "react";
import { Link } from "react-router-dom";
import User from "../assets/user.png";

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(searchTerm);
  };

  return (
    <div className="bg-secondary-color h-24 flex items-center justify-between py-0 px-10">
      <div className="text-font-primary text-xl font-semibold">
        <Link to="/">Movie App</Link>
      </div>
      <div className="w-6/12 flex justify-center">
        <form
          className="w-[70%] flex justify-center items-center"
          onSubmit={(e) => submitHandler(e)}
        >
          <input
            className="w-full text-lg px-[5px] pt-[5px] pb-[10px] h-10 outline-none"
            type="text"
            placeholder="Search Movies or Shows"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="py-0 px-2 m-2 flex justify-center items-center h-10 cursor-pointer text-xl bg-font-primary"
            type="submit"
          >
            <span className="material-symbols-outlined">search</span>
          </button>
        </form>
      </div>
      <div className="user-image w-12 h-12">
        <img src={User} alt="User" />
      </div>
    </div>
  );
};
