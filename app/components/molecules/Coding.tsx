"use client";
import Picture from "../attoms/Picture";
import React from "react";
import {ReactTyped} from "react-typed";
import pic from "@/public/assets/images/landing/Landing-Image.png";

export default function Coding() {
  return (
    <div className="flex justify-center items-center w-[500px] relative">
      <div className="absolute w-profile h-profile z-10 opacity-30 hover:opacity-100 transition-all ">
        <Picture
          className=" shrink-0 active:scale-105 transition-all"
          src={pic}
        ></Picture>
      </div>

      <div className="opacity-55 text-2xl">
        <ReactTyped
          className="text-mark-text "
          strings={[
            `
          let button_menu = document.querySelector(".header_button"); <br/>
let float_menu  = document.querySelector(".header_menu--float");<br/>
let line_top   = document.querySelector(".header_button_line--top");<br/>
let line_under = document.querySelector(".header_button_line--bottom");<br/>
button_menu.isSelected = false;<br/>
function addEffectWriting(element, time)<br/> {
  let element_array = element.innerText.split("");<br/>
  element.count     = 0;<br/>
  element.innerText = "";<br/>
<br/>
  function writeSymbols() {<br/>
    element.innerText += element_array[element.count];<br/>
    element.count++;<br/>

    if (element.count <= element_array.length) {<br/>
      setTimeout(() => {<br/>
        writeSymbols();<br/>
      }, time);<br/>
    } else if (element.count >= element_array.length) {<br/>
      element.count     = 0;<br/>
      element.innerText = "";<br/>
<br/>
      writeSymbols();<br/>
    }<br/>
  }<br/>
  writeSymbols();<br/>
}

          `,
          ]}
          typeSpeed={40}
          loop={true}
        />
      </div>
    </div>
  );
}
