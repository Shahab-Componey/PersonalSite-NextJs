import React from "react";
import Coding from "../molecules/Coding";
import Heading from "../molecules/Heading";
export default function Landing() {
  return (
    <main
      id="Home"
      className="flex flex-1 justify-between  px-container items-center "
    >
      <Heading></Heading>
      <Coding></Coding>
    </main>
  );
}
