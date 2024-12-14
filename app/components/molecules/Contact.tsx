import React from "react";
import Text from "../attoms/Text";
import Picture from "../attoms/Picture";
import {Contact_Interface} from "@/app/models/_model";
export default function Contact({children, src, href}: Contact_Interface) {
  return (
    <div className="flex text-Contact-title gap-Contact-gap ">
      <Picture src={src}></Picture>
      <Text>
        <a target="new" href={href}>
          {children}
        </a>
      </Text>
    </div>
  );
}
