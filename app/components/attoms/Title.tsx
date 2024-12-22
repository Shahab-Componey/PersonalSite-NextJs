import {Props} from "next/script";
import React from "react";

interface Text_Interface {
  children: React.ReactNode;
  className?: string;
}

export default function Title({children, className}: Text_Interface) {
  return (
    <h1 className={`${className} text-mark-text text-Title`}>{children}</h1>
  );
}
