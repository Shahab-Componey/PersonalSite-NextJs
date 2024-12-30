import React, {useContext} from "react";
import Picture from "../attoms/Picture";
import {ThemeContext} from "@/app/layout";
import {StaticImageData} from "next/image";
import AnimatedCursor from "react-animated-cursor";
interface Skill_Interface {
  children: React.ReactNode;
  logo: StaticImageData | string;
  color?: string;
}

export default function Skill({children, logo, color}: Skill_Interface) {
  const {setColor}: any = useContext(ThemeContext);
  return (
    <div
      onMouseEnter={(e) => {
        if (e.currentTarget === e.target) {
          setColor(color || "rgb(255,255,255)");
        }
      }}
      onMouseLeave={() => {
        setColor("rgb(255,255,255)");
      }}
      className="skill w-skill-weigth cursor-pointer h-skill css-selector flex flex-col card gap-Skill-gap rounded-Skill justify-center items-center hover:scale-110 transition-all"
    >
      <Picture src={logo}></Picture>
      <div className="text-Skill-text text-regular">{children}</div>
    </div>
  );
}
