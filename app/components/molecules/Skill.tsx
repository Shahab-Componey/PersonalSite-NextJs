import React from "react";
import {Skill_Interface} from "@/app/models/_model";
import Picture from "../attoms/Picture";

export default function Skill({children, logo}: Skill_Interface) {
  return (
    <div className="w-skill-weigth h-skill bg-light-bg flex flex-col gap-Skill-gap rounded-Skill justify-center items-center">
      <Picture src={logo}></Picture>
      <div className="text-Skill-text text-regular">{children}</div>
    </div>
  );
}
