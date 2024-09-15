import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ links = [] }) => {
  return (
    <nav>
      <ul className="flex items-center justify-center text-xl">
        {Array.isArray(links) && links.length > 0 ? (
          links.map((link) => (
            <li className="mr-2" key={link.id}>
              <Link to={link.href}>
                {typeof link.text === "string" ? link.text : link.text}
              </Link>
            </li>
          ))
        ) : (
          <li>No links available</li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
