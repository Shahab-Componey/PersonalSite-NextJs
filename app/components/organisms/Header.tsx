import Text from "../attoms/Text";
import Name from "../attoms/Name";
import NavBar from "../molecules/NavBar";

import React from "react";

export default function Header() {
  return (
    <header className="flex  justify-between items-center px-container h-header fixed inset-0 z-50">
      <Name></Name>
      <NavBar></NavBar>
    </header>
  );
}
