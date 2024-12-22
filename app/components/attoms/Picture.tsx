"use client";

import React from "react";
import Image, {StaticImageData} from "next/image";

interface image_Interface {
  src: StaticImageData | string;
  className?: string;
  full?: boolean;
}
export default function Picture({src, className, full}: image_Interface) {
  return (
    <div className={`${full ? "h-full" : ""}`}>
      <Image
        className={`h-full ${className}`}
        src={src}
        alt={"image dosent loaded"}
      ></Image>
    </div>
  );
}
