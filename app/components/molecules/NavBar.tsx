import React from "react";
import Text from "../attoms/Text";

export default function NavBar() {
  return (
    <nav>
      <ul className={`flex gap-NavBar-gap text-NavBar-text text-nowrap  `}>
        <li>
          <Text>About Me</Text>
        </li>
        <li>
          <Text>Skills</Text>
        </li>

        <li>
          <Text>Pet-Projects</Text>
        </li>
        <li>
          <Text>Contacts</Text>
        </li>
      </ul>
    </nav>
  );
}
