"use client";

import React from "react";
import Skill from "../molecules/Skill";
import NextJsPic from "@/public/assets/images/Tools/NextJs.svg";
import JsPic from "@/public/assets/images/Tools/Js.svg";
import TsPic from "@/public/assets/images/Tools/Ts.svg";
import ReactPic from "@/public/assets/images/Tools/React.svg";
import NodeJsPic from "@/public/assets/images/Tools/NodeJs.svg";
import {motion} from "motion/react";

export default function Skills() {
  return (
    <motion.section
      initial={{opacity: 0 , y:-300}}
      whileInView={{opacity: 1,y:0}}
      viewport={{once: false}}
      transition={{
        duration: 1,
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
