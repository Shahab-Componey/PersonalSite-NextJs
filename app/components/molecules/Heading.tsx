import React from "react";
import Text from "../attoms/Text";
import Button from "../attoms/Button";
import gitHubPic from "@/public/assets/images/Tools/GitHubLogo.svg";
import resumePic from "@/public/assets/images/Tools/ResumeIcon.svg";

import Picture from "../attoms/Picture";
export default function Heading() {
  return (
    <div className="flex flex-col gap-12 sm:items-center sm:text-center">
      <Text className="font-bold text-Landing-name text-mark-text">
        Mahdi Shahabi Zadeh
      </Text>
      <Text className="font-bold text-Landing-job text-regular">
        Web Developer
      </Text>
      <div className="flex gap-8">
        <Button href={"https://i.ibb.co/bgZmgcy/Resume-6.png"}>
          <div>CV</div>
        </Button>
        <Button href={"https://github.com/ShahabMorgan"}>
          <div className="flex items-center justify-center gap-3 ">
            <Picture
              className="size-Icon-size-button"
              src={gitHubPic}
            ></Picture>
            <div>GitHub</div>
          </div>
        </Button>
      </div>
    </div>
  );
}
