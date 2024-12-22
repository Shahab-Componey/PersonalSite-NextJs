import React from "react";

interface Text_Interface {
  children: React.ReactNode;
  className?: string;
}

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
