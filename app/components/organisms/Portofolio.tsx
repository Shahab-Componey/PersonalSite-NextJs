"use client";

import Card from "../molecules/Card";
import {motion} from "motion/react";
import React from "react";
import Picture from "../attoms/Picture";
import {StaticImageData} from "next/image";
import Button from "../attoms/Button";

// tolls

import gitHubPic from "@/public/assets/images/Tools/GitHubLogo.svg";
import reactPic from "@/public/assets/images/Tools/React.svg";
import nextJsPic from "@/public/assets/images/Tools/NextJs.svg";
import tsPic from "@/public/assets/images/Tools/Ts.svg";
import gaspPic from "@/public/assets/images/Tools/Gsap.svg";
import taillwindPic from "@/public/assets/images/Tools/Taillwind.svg";
import swiperPic from "@/public/assets/images/Tools/Swiper.svg";
import electronPic from "@/public/assets/images/Tools/Electorn.svg";
import jsPic from "@/public/assets/images/Tools/Js.svg";

// templates

import fencing360Pic from "@/public/assets/images/Portofolio/Fencing360_Template.png";
import shahabstorePic from "@/public/assets/images/Portofolio/ShahabStore_Template.png";
import todoPic from "@/public/assets/images/Portofolio/Todo_Template.png";
import lspdPic from "@/public/assets/images/Portofolio/LSPD_Template.png";

interface DefualtComponent {
  src: StaticImageData;
}

interface HoveredComponent {
  title: string;
  tolls: string[];
  descrption: string;
  gitHubLink: string;
  projectLink: string;
}

function DefualtComponent({src}: DefualtComponent) {
  return (
    <div className="h-full">
      <Picture
        full={true}
        className="object-cover h-full rounded-xl"
        src={src}
      ></Picture>
    </div>
  );
}
function HoveredComponent({
  title,
  tolls,
  descrption,
  gitHubLink,
  projectLink,
}: HoveredComponent) {
  const tollses = tolls.map((v, i) => {
    return (
      <div className="" key={i}>
        <Picture className="size-Icon-size" src={v}></Picture>
      </div>
    );
  });

  return (
    <div className="flex flex-col items-center justify-center h-full p-20 card--hovred gap-portofilio-gap ">
      <div className="text-Card-title-text">{title}</div>
      <div className="flex gap-3 text-Card-tolls-text">{tollses}</div>
      <div className="w-full bg-black h-row"></div>
      <div className="text-Card-tolls-descrption">{descrption}</div>
      <div className="flex gap-5">
        <Button>
          <a target="new" href={gitHubLink}>
            <div className="flex items-center justify-center gap-3 ">
              <Picture
                className="size-Icon-size-button"
                src={gitHubPic}
              ></Picture>
              <div>GitHub</div>
            </div>
          </a>
        </Button>
        <Button>
          <a target="new" href={projectLink}>
            <div className="flex items-center justify-center gap-3">
              <div>See Project</div>
            </div>
          </a>
        </Button>
      </div>
    </div>
  );
}

export default function Portofolio() {
  const portoflio = [
    {
      projectPicture: fencing360Pic,
      title: "Fencing360",
      tolls: [reactPic, nextJsPic, tsPic, swiperPic, taillwindPic, gaspPic],
      descrption: "Fenccing Club",
      gitHubLink: "https://github.com/ShahabMorgan/Fencing360-React",
      projectLink: "https://fc360.liara.run/",
    },
    {
      projectPicture: shahabstorePic,
      title: "ShahabStore",
      tolls: [jsPic, electronPic, , taillwindPic],
      descrption: "ShahabStore",
      gitHubLink: "https://github.com/ShahabMorgan/Fencing360-React",
      projectLink: "https://github.com/ShahabMorgan/Fencing360-React",
    },
    {
      projectPicture: todoPic,
      title: "ShahabStore",
      tolls: [reactPic, taillwindPic],
      descrption: "Todo List App",
      gitHubLink: "https://github.com/ShahabMorgan/Fencing360-React",
      projectLink: "https://github.com/ShahabMorgan/Fencing360-React",
    },
    {
      projectPicture: lspdPic,
      title: "lspd.ir",
      tolls: [nextJsPic, reactPic, taillwindPic],
      descrption: "LSPD Game WebSite",
      gitHubLink: "LSPD.ir",
      projectLink: "lspd.ir",
    },
  ];

  const portoflioCards = portoflio.map((v) => {
    return (
      <Card
        key={v.title}
        defualtComponent={<DefualtComponent src={v.projectPicture} />}
        hoveredComponent={<HoveredComponent {...v} />}
      ></Card>
    );
  });

  return (
    <motion.section
      initial={{opacity: 0, y: 110}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: false}}
      transition={{
        duration: 1,
      }}
      id="Portofolio"
      className="flex items-center justify-center flex-1 "
    >
      <div className="flex flex-wrap items-center justify-center gap-10 lg:mt-80">
        {portoflioCards}
      </div>
    </motion.section>
  );
}
