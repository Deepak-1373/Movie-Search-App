import React from "react";
import { Link } from "react-router-dom";
import User from "../assets/user.png";

export const Header = () => {
  return (
    <div className="bg-secondary-color h-24 flex items-center justify-between py-0 px-9">
      <Link to="/">
        <div className="text-font-primary text-xl font-semibold">Movie App</div>
      </Link>
      <div className="user-image w-12 h-12">
        <img src={User} alt="User" />
      </div>
    </div>
  );
};
