import React from "react";
import Text from "../attoms/Text";

export default function NavBar() {
  return (
    <nav>
      <ul className={`flex gap-NavBar-gap text-NavBar-text text-nowrap sm:text-2xl`}>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#AboutMe">About Me</a>
        </li>
        <li>
          <a href="#Skills">Skills</a>
        </li>

        <li>
          <a href="#Portofolio">Portofolio</a>
        </li>
      </ul>
    </nav>
  );
}
