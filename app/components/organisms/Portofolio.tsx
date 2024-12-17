"use client";

import Card from "../molecules/Card";
import {motion} from "motion/react";
import React from "react";
import Picture from "../attoms/Picture";
import {StaticImageData} from "next/image";
import {Url} from "url";
import Button from "../attoms/Button";
import fencing360Pic from "@/public/assets/images/Portofolio/Fencing360_Template.png";
import gitHubPic from "@/public/assets/images/Portofolio/GitHubLogo.svg";

import {div} from "motion/react-client";

interface DefualtComponent {
  src: StaticImageData;
}

interface HoveredComponent {
  title: string;
  tolls: string;
  descrption: string;
  gitHubLink: string;
}

function DefualtComponent({src}: DefualtComponent) {
  return (
    <div className="h-full">
      <Picture className="h-full" src={src}></Picture>
    </div>
  );
}
function HoveredComponent({
  title,
  tolls,
  descrption,
  gitHubLink,
}: HoveredComponent) {
  return (
    <div className="flex card--hovred flex-col justify-center items-center gap-portofilio-gap h-full p-20  ">
      <div className="text-Card-title-text">{title}</div>
      <div className="text-Card-tolls-text">{tolls}</div>
      <div className="w-full bg-black h-row"></div>
      <div className="text-Card-tolls-descrption">{descrption}</div>
      <Button>
        <a target="new" href={gitHubLink}>
          <div className="flex justify-center items-center gap-3">
            <Picture className="size-8" src={gitHubPic}></Picture>
            <div>GitHub</div>
          </div>
        </a>
      </Button>
    </div>
  );
}

export default function Portofolio() {
  return (
    <motion.section
      initial={{opacity: 0, y: 110}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: false}}
      transition={{
        duration: 1,
      }}
      id="Portofolio"
      className="flex justify-center items-center flex-1"
    >
      <Card
        defualtComponent={<DefualtComponent src={fencing360Pic} />}
        hoveredComponent={
          <HoveredComponent
            title="Fencing360"
            tolls="React/NextJs/Taillwind/Swiper"
            descrption="باشگاه شمشیربازی 360"
            gitHubLink={"https://github.com/ShahabMorgan/Fencing360-React"}
          />
        }
      ></Card>
    </motion.section>
  );
}
