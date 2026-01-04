import React from "react";
import { navLinks } from "../constants";
import dayjs from "dayjs";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Justin's Portfolio</p>
        <ul>
          {navLinks.map(({ id, name, link }) => (
            <li key={id}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
