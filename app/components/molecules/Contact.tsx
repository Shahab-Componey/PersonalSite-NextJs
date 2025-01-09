import React from "react";
import Text from "../attoms/Text";
import Picture from "../attoms/Picture";
import {StaticImageData} from "next/image";
interface Contact_Interface {
  children: React.ReactNode;
  src: StaticImageData | string;
  href: string;
}

export default function Contact({children, src, href}: Contact_Interface) {
  return (
    <div className="flex  shrink-0 text-Contact-title gap-Contact-gap items-start sm:text-3xl">
      <Picture className=" size-Icon-size" src={src}></Picture>
      <Text>
        <a target="new" href={href}>
          {children}
        </a>
      </Text>
    </div>
  );
}
