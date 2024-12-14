import React from "react";
import {image_Interface} from "@/app/models/_model";
import Image from "next/image";
export default function Picture({src, className}: image_Interface) {
  return (
    <div>
      <Image src={src} alt={"image dosent "} className={className}></Image>
    </div>
  );
}
