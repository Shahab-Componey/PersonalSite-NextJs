import {Props} from "next/script";
import React from "react";
import {Text_Interface} from "@/app/interface/global_interface";

export default function Text({children, className}: Text_Interface) {
  return (
    <p
      className={`${className}  ${
        !className?.includes("text-") && "text-regular"
      }`}
    >
      {children}
    </p>
  );
}
