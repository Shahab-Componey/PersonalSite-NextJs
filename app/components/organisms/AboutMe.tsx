import React from "react";
import Text from "../attoms/Text";
import Picture from "../attoms/Picture";
import aboutMePic from "@/public/assets/images/AboutMe/AboutMe-Image.png";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="flex gap-AboutMe justify-center items-center flex-1">
      <Picture src={aboutMePic} className="size-AboutMe-image"></Picture>
      <Text className="text-AboutMe text-regular">
        A few years ago, I became interested in developing websites and
        interfaces.
        <br />
        Since then, I have been steadily improving my skills. Now I am
        developing
        <br />
        websites and web applications to order or for myself.
      </Text>
    </section>
  );
}
