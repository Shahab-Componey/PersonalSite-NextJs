import React, {Profiler, ReactNode, useRef, useState} from "react";
import {motion} from "framer-motion";

interface Card_Interface {
  defualtComponent: ReactNode;
  hoveredComponent: ReactNode;
}

export default function Card({
  defualtComponent,
  hoveredComponent,
}: Card_Interface) {
  const [hover, SetHover] = useState<Boolean>(false);

  return (
    <div>
      <motion.div
        initial={{opacity: 1}}
        className="size-portofilio bg-regular rounded-2xl "
        animate={hover ? {opacity: [0, 1]} : {opacity: [0, 1]}}
        transition={{duration: 0.5}}
        onMouseEnter={() => SetHover(true)}
        onMouseLeave={() => SetHover(false)}
      >
        {!hover ? defualtComponent : hoveredComponent}
      </motion.div>
    </div>
  );
}
