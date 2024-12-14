import React from "react";
import Skill from "../molecules/Skill";
import NextJsPic from "@/public/assets/images/Skills/NextJs.svg";
import JsPic from "@/public/assets/images/Skills/Js.svg";
import TsPic from "@/public/assets/images/Skills/Ts.svg";
import ReactPic from "@/public/assets/images/Skills/React.svg";
import NodeJsPic from "@/public/assets/images/Skills/NodeJs.svg";

export default function Skills() {
  return (
    <section
      id="Skills"
      className="flex gap-Skills-gap justify-center items-center flex-1"
    >
      <Skill logo={ReactPic}>React</Skill>
      <Skill logo={NextJsPic}>NextJs</Skill>
      <Skill logo={JsPic}>JavaScript</Skill>
      <Skill logo={TsPic}>TypeScript</Skill>
      <Skill logo={NodeJsPic}>NodeJs</Skill>
    </section>
  );
}
