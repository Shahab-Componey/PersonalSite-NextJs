"use client";

import React from "react";
import {image_Interface} from "@/app/models/_model";
import Image from "next/image";
import {div} from "motion/react-client";
import {motion} from "motion/react";

export default function Picture({src, className}: image_Interface) {
  return (
    <div className={className}>
      <Image
        className="h-full"
        objectFit="cover"
        src={src}
        alt={"image dosent loaded"}
      ></Image>
    </div>
  );
}
