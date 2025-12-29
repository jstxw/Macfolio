import React from "react";
import { navLinks, navIcons } from "../constants";
import dayjs from "dayjs";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Justin's Portfolio</p>
        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
        {/*avoids repetitive code, handles dynamic lists*/}
      </div>
      <div>
        <ul>
          {navIcons.map(({ id, img }) => {
            return (
              <li key={id}>
                <img src={img} className="icon-hover" alt={`icon-${id}`} />
              </li>
            );
          })}
        </ul>

        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
