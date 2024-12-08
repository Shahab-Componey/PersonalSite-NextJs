import React from "react";
import {Skill_Interface} from "@/app/interface/global_interface";

export default function Skill({children}: Skill_Interface) {
  return (
    <div className="w-skill-weigth h-skill bg-light-bg flex flex-col gap-Skill-gap rounded-Skill justify-center items-center">
      <div>logo</div>
      <div className="text-Skill-text">{children}</div>
    </div>
  );
}
