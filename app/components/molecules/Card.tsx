"use client";
import React, {useState} from "react";
import {Card_Interface} from "@/app/models/_model";
import Picture from "../attoms/Picture";
import Button from "../attoms/Button";
import gsap from "gsap";
import pic from "@/public/assets/images/landing/Landing-Image.png";
import {div} from "motion/react-client";

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
      className="size-portofilio bg-regular"
      onMouseEnter={() => {
        cardHandler(true, ".defualtComponent");
      }}
      onMouseLeave={() => {
        cardHandler(false, ".hoveredComponent");
      }}
    >
      <div>
        {!hover ? (
          <div className="defualtComponent h-full w-full">
            {defualtComponent}
          </div>
        ) : (
          <div className="hoveredComponent h-full">{hoveredComponent}</div>
        )}
      </div>
    </div>
  );
}
