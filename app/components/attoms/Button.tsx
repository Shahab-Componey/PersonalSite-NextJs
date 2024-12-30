import React from "react";
interface Button_Interface {
  children: React.ReactNode;
  className?: string;
}


export default function Button({children, className}: Button_Interface) {
  return (
    <div
      className={`${className} button text-2xl font-bold w-max py-button-y px-button-x rounded-Button  bg-button text-regular hover:scale-105  transition-all active:text-mark-text`}
    >
      {children}
    </div>
  );
}
