import React from "react";
import {Button_Interface} from "@/app/models/_model";
export default function Button({children, className}: Button_Interface) {
  return (
    <div
      className={`${className} text-2xl font-bold w-max py-button-y px-button-x rounded-Button cursor-pointer bg-button text-regular hover:scale-105  transition-all active:text-mark-text`}
    >
      {children}
    </div>
  );
}
