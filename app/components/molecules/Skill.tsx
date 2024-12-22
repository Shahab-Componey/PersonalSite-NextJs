import React from "react";
import Picture from "../attoms/Picture";
import {StaticImageData} from "next/image";
interface Skill_Interface {
  children: React.ReactNode;
  logo: StaticImageData | string;
}
export default function Skill({children, logo}: Skill_Interface) {
  return (
    <div className="w-skill-weigth h-skill bg-light-bg flex flex-col gap-Skill-gap rounded-Skill justify-center items-center">
      <Picture src={logo}></Picture>
      <div className="text-Skill-text text-regular">{children}</div>
    </div>
  );
}
