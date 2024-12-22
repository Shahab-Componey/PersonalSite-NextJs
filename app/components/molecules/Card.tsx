"use client";
import React, {ReactNode, useState} from "react";
import gsap from "gsap";

interface Card_Interface {
  defualtComponent: ReactNode;
  hoveredComponent: ReactNode;
}

export default function Card({
  defualtComponent,
  hoveredComponent,
}: Card_Interface) {
  const [hover, SetHover] = useState<Boolean>(false);
  const cardHandler = (status: boolean, className: string) => {
    gsap.to(`${className}`, {
      opacity: 0,
      onComplete: () => {
        SetHover(status);
        gsap.to(`${className}`, {
          opacity: 1,
        });
      },
    });
  };

  return (
    <div
      className="size-portofilio bg-regular rounded-2xl"
      onMouseEnter={() => {
        cardHandler(true, ".defualtComponent");
      }}
      onMouseLeave={() => {
        cardHandler(false, ".hoveredComponent");
      }}
    >
      <div className="h-full">
        {!hover ? (
          <div className=" defualtComponent h-full w-full ">
            {defualtComponent}
          </div>
        ) : (
          <div className="hoveredComponent w-full h-full">
            {hoveredComponent}
          </div>
        )}
      </div>
    </div>
  );
}
