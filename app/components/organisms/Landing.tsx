"use client";
import React from "react";
import Coding from "../molecules/Coding";
import Heading from "../molecules/Heading";
import {motion} from "motion/react";
export default function Landing() {
  return (
    <motion.main
      initial={{opacity: 0, y: 110}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: false}}
      transition={{
        duration: 2,
      }}
      id="Home"
      className="flex flex-1 justify-between  px-container items-center "
    >
      <Heading></Heading>
      <Coding></Coding>
    </motion.main>
  );
}
