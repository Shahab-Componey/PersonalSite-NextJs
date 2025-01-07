import React, {ReactNode, useRef, useState} from "react";
import gsap from "gsap";

interface Card_Interface {
  defualtComponent: ReactNode;
  hoveredComponent: ReactNode;
}

export default function Card({
  defualtComponent,
  hoveredComponent,
}: Card_Interface) {
  const [hover, SetHover] = useState<Boolean>(false);
  const elment = useRef<HTMLInputElement | null>(null);

  const cardHandler = (status: boolean, element: HTMLElement) => {
    gsap.to(element, {
        opacity: 0,
      onComplete: () => {
        SetHover(status);
        gsap.to(element, {
          opacity: 1,
        });
      },
    });
  };

  return (
    <div
      className="size-portofilio bg-regular rounded-2xl"
      onMouseEnter={() => {
        cardHandler(true, elment.current!);
      }}
      onMouseLeave={() => {
        cardHandler(false, elment.current!);
      }}
    >
      <div className="h-full">
        {!hover ? (
          <div ref={elment} className="defualtComponent h-full w-full">
            {defualtComponent}
          </div>
        ) : (
          <div ref={elment} className="hoveredComponent w-full h-full">
            {hoveredComponent}
          </div>
        )}
      </div>
    </div>
  );
}
