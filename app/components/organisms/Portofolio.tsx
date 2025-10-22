"use client";

import {motion} from "framer-motion";
import React, {useState} from "react";
import Picture from "../attoms/Picture";
import Button from "../attoms/Button";
import {StaticImageData} from "next/image";

// tools
import gitHubPic from "@/public/assets/images/Tools/GitHubLogo.svg";
import reactPic from "@/public/assets/images/Tools/React.svg";
import nextJsPic from "@/public/assets/images/Tools/NextJs.svg";
import tsPic from "@/public/assets/images/Tools/Ts.svg";
import gaspPic from "@/public/assets/images/Tools/Gsap.svg";
import taillwindPic from "@/public/assets/images/Tools/Taillwind.svg";
import swiperPic from "@/public/assets/images/Tools/Swiper.svg";
import electronPic from "@/public/assets/images/Tools/Electorn.svg";
import jsPic from "@/public/assets/images/Tools/Js.svg";
import angularPic from "@/public/assets/images/Tools/Angular.svg";

// projects
import fencing360Pic from "@/public/assets/images/Portofolio/Fc360.png";
import shahabstorePic from "@/public/assets/images/Portofolio/ShahabStore.png";
import viragoharPic from "@/public/assets/images/Portofolio/ViraGohar.png";
import odPic from "@/public/assets/images/Portofolio/Od.npg.png";

interface Project {
  title: string;
  projectPicture: StaticImageData;
  tolls: StaticImageData[];
  descrption?: string;
  gitHubLink?: string;
  projectLink?: string;
}

function SmoothCard({
  title,
  projectPicture,
  tolls,
  descrption,
  gitHubLink,
  projectLink,
}: Project) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="relative w-[320px] h-[400px] [perspective:1200px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        animate={{rotateY: flipped ? 180 : 0}}
        transition={{duration: 0.7, ease: [0.45, 0, 0.55, 1]}}
        className="relative w-full h-full rounded-2xl shadow-xl [transform-style:preserve-3d]"
      >
        {/* front */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{backfaceVisibility: "hidden"}}
        >
          <Picture
            full
            className="object-contain w-full h-full"
            src={projectPicture}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-slate-500 text-white py-4 text-center text-lg font-medium">
            {title}
          </div>
        </div>

        {/* back */}
        <div
          className="absolute inset-0 text-white bg-slate-500 flex flex-col justify-center items-center gap-5 p-6 rounded-2xl text-center"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
          <div className="flex gap-3 justify-center flex-wrap">
            {tolls.map((t, i) => (
              <Picture key={i} className="size-14" src={t} />
            ))}
          </div>

          {descrption && (
            <p className="text-white text-xl leading-relaxed">{descrption}</p>
          )}

          <div className="flex gap-3 mt-2">
            {gitHubLink && (
              <Button href={gitHubLink}>
                <div className="flex items-center gap-2">
                  <Picture className="w-5 h-5" src={gitHubPic} />
                  <span>GitHub</span>
                </div>
              </Button>
            )}
            {projectLink && (
              <Button href={projectLink}>
                <span>See Project</span>
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const projects: Project[] = [
    {
      projectPicture: fencing360Pic,
      title: "Fencing 360 Academy",
      tolls: [reactPic, nextJsPic, tsPic, swiperPic, taillwindPic, gaspPic],
      projectLink: "https://fc360.ir/",
    },
    {
      projectPicture: odPic,
      title: "Online Developers Project Mangmnet App",
      tolls: [angularPic, taillwindPic],
      projectLink:
        "https://staging.app.onlinedevelopers.ir/profile/empty-profile",
    },
    {
      projectPicture: viragoharPic,
      title: "ViraGohar Web",
      tolls: [electronPic, , taillwindPic],
      projectLink: "https://viragohar.ir/",
    },
    {
      projectPicture: shahabstorePic,
      title: "ShahabStore",
      tolls: [jsPic, electronPic, taillwindPic],
      projectLink: "https://github.com/ShahabMorgan/ShahabStore-ElectronJs",
    },
  ];

  return (
    <motion.section
      id="Portfolio"
      initial={{opacity: 0, y: 80}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 1}}
      viewport={{once: true}}
      className="flex flex-col items-center justify-center py-24"
    >
      <div className="flex flex-wrap justify-center gap-10">
        {projects.map((p, i) => (
          <SmoothCard key={i} {...p} />
        ))}
      </div>
    </motion.section>
  );
}
