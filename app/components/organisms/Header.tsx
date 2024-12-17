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
      className="flex  justify-between items-center px-container h-header fixed inset-0 z-50"
    >
      <Name></Name>
      <NavBar></NavBar>
    </motion.header>
  );
}
