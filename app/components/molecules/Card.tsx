"use client";
import React, {useState} from "react";
import {Card_Interface} from "@/app/interface/global_interface";
import Picture from "../attoms/Picture";
import Button from "../attoms/Button";
import gsap from "gsap";
import pic from "@/public/assets/images/landing/Landing-Image.png";
export default function Card({title, tolls, descrption}: Card_Interface) {
  const [hover, SetHover] = useState<Boolean>(false);

  return (
    <div
      className="size-portofilio bg-slate-500"
      onMouseEnter={() => {
        SetHover(true);
      }}
      onMouseLeave={() => {
        SetHover(false);
      }}
    >
      {!hover && (
        <div className="card--hovred">
          <Picture src={pic}></Picture>
        </div>
      )}

      {hover && (
        <div className="flex card--hovred flex-col justify-center items-center gap-portofilio-gap h-full p-20  ">
          <div className="text-Card-title-text">{title}</div>
          <div className="text-Card-tolls-text">{tolls}</div>
          <div className="w-full bg-black h-row"></div>
          <div className="text-Card-tolls-descrption">{descrption}</div>
          <Button>SALAM</Button>
        </div>
      )}
    </div>
  );
}
