"use client";

import Name from "../attoms/Name";
import NavBar from "../molecules/NavBar";
import React from "react";
import {motion} from "motion/react";

export default function Header() {
  return (
    <motion.header
      initial={{opacity: 0, y: 110}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: false}}
      transition={{
        duration: 1,
      }}
      className="justify-between items-center px-container h-header text-center flex-1  fixed inset-0 z-50 w-full lg:my-10 py-12"
    >
      <div className="flex  flex-1 justify-between items-center gap-32 w-full  lg:flex-col  lg:gap-5">
        <Name></Name>
        <NavBar></NavBar>
      </div>
    </motion.header>
  );
}
