import {Props} from "next/script";
import React from "react";
import {Text_Interface} from "@/app/models/_model";

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
