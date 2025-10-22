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
  const timeoutRef = useRef<any>(0);

  const clickHandler = () => {
    clearTimeout(timeoutRef.current);
    SetHover(true);
    const timeoutId = setTimeout(() => {
      SetHover(false);
    }, 5000);
    timeoutRef.current = timeoutId;
  };

  const mouseHandler = (status: boolean) => {
    if (!window.matchMedia("(min-width: 1200px)").matches) return;
    SetHover(status);
  };

  return (
    <div>
      <motion.div
        initial={{opacity: 1}}
        className="size-portofilio  rounded-2xl "
        animate={hover ? {opacity: [0, 1]} : {opacity: [0, 1]}}
        transition={{duration: 0.5}}
        // onClick={() => clickHandler()}
        // onMouseEnter={() => mouseHandler(true)}
        // onMouseLeave={() => mouseHandler(false)}
      >
        {!hover ? defualtComponent : hoveredComponent}
      </motion.div>
    </div>
  );
}
