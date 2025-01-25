"use client";
import React from "react";
import Coding from "../molecules/Coding";
import Heading from "../molecules/Heading";
import {motion} from "motion/react";
export default function Landing() {
  return (
    <motion.main
      initial={{opacity: 0, y: -210}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: false}}
      transition={{
        duration: 1,
      }}
      id="Home"
      className="flex flex-1 justify-between gap-32 px-container items-center sm:flex-col-reverse  sm:justify-center  sm:gap-5  "
    >
      <Heading></Heading>
      <Coding></Coding>
    </motion.main>
  );
}
