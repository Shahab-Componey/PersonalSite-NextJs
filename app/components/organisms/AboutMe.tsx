"use client";

import React from "react";
import Text from "../attoms/Text";
import Picture from "../attoms/Picture";
import aboutMePic from "@/public/assets/images/AboutMe/AboutMe-Image.svg";
import {motion} from "motion/react";

export default function AboutMe() {
  return (
    <section
      id="AboutMe"
      className="flex gap-AboutMe justify-center items-center flex-1"
    >
      <motion.div
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: false}}
        transition={{
          duration: 1,
        }}
      >
        <Picture src={aboutMePic} className="size-AboutMe-image"></Picture>
      </motion.div>
      <Text className="text-AboutMe text-regular">
        <motion.div
          initial={{opacity: 0, x: 110}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: false}}
          transition={{
            duration: 1,
          }}
        >
          A few years ago, I became interested in developing websites and
          interfaces.
          <br />
          Since then, I have been steadily improving my skills. Now I am
          developing
          <br />
          websites and web applications to order or for myself.
        </motion.div>
      </Text>
    </section>
  );
}
