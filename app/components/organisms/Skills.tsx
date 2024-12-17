"use client";

import React from "react";
import Skill from "../molecules/Skill";
import NextJsPic from "@/public/assets/images/Skills/NextJs.svg";
import JsPic from "@/public/assets/images/Skills/Js.svg";
import TsPic from "@/public/assets/images/Skills/Ts.svg";
import ReactPic from "@/public/assets/images/Skills/React.svg";
import NodeJsPic from "@/public/assets/images/Skills/NodeJs.svg";
import {motion} from "motion/react";

export default function Skills() {
  return (
    <motion.section
      initial={{opacity: 0, filter: "blur(15px)"}}
      whileInView={{opacity: 1, filter: "blur(0)"}}
      viewport={{once: false}}
      transition={{
        duration: 2,
      }}
      id="Skills"
      className="flex Skills gap-Skills-gap justify-center items-center flex-1"
    >
      <Skill logo={ReactPic}>React</Skill>
      <Skill logo={NextJsPic}>NextJs</Skill>
      <Skill logo={JsPic}>JavaScript</Skill>
      <Skill logo={TsPic}>TypeScript</Skill>
      <Skill logo={NodeJsPic}>NodeJs</Skill>
    </motion.section>
  );
}
