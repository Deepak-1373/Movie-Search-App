import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
    </div>
  );
};
