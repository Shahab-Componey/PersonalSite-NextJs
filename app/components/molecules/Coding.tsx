import Picture from "../attoms/Picture";
import React from "react";
import {ReactTyped} from "react-typed";
import pic from "@/public/assets/images/landing/Landing-Image.svg";

export default function Coding() {
  return (
    <div className="flex justify-center items-center w-[500px] relative">
      <div className="absolute w-profile h-profile z-10 opacity-30 hover:opacity-100 transition-all ">
        <Picture
          className=" shrink-0 active:scale-105 transition-all"
          src={pic}
        ></Picture>
      </div>

      <div className="opacity-85 text-2xl">
        <ReactTyped
          className="text-white "
          strings={[
            `
          "use client";<br/>
import React from "react";<br/>
import Coding from "../molecules/Coding";<br/>
import Heading from "../molecules/Heading";<br/>
import {motion} from "motion/react";<br/>
export default function Landing() {<br/>
  return (<br/>
    <motion.main<br/>
      initial={{opacity: 0, y: 110}}<br/>
      whileInView={{opacity: 1, y: 0}}<br/>
      viewport={{once: false}}
      transition={{<br/>
        duration: 2,<br/>
      }}<br/>
      id="Home"<br/>
      className="flex flex-1 justify-between  px-container items-center "<br/>
    ><br/>
      <Heading></Heading><br/>
      <Coding></Coding><br/>
    </motion.main><br/>
  )
}         `,
          ]}
          typeSpeed={40}
          loop={true}
        />
      </div>
    </div>
  );
}
