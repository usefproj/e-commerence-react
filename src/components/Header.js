import React from "react";
import { FaFire } from "react-icons/fa";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = ({ links }) => {
  return (
    <header className="bg-teal-500 w-screen flex items-center justify-center sticky z-10 top-0">
      <div className="max-w-screen-lg w-full p-4 flex justify-between items-center">
        <h1 className="text-2xl text-center font-semibold">
          <Link to="/">
            Sell hell
            <FaFire className="inline ml-2 text-orange-500" />
          </Link>
        </h1>
        <Nav links={links} />
      </div>
    </header>
  );
};

export default Header;
