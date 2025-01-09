import React from "react";
import Text from "../attoms/Text";
import Button from "../attoms/Button";
import gitHubPic from "@/public/assets/images/Tools/GitHubLogo.svg";
import resumePic from "@/public/assets/images/Tools/ResumeIcon.svg";

import Picture from "../attoms/Picture";
export default function Heading() {
  return (
    <div className="flex flex-col gap-12 sm:items-center sm:text-center">
      <Text className="text-Landing-name text-mark-text font-bold">
        Mahdi Shahabi Zadeh
      </Text>
      <Text className="text-Landing-job text-regular font-bold">
        Web Developer
      </Text>
      <div className="flex gap-8">
        <Button>
          <a
            target="new "
            href={
              "https://cdn.discordapp.com/attachments/508702069138653199/1326931672448503881/Resume.png?ex=678138eb&is=677fe76b&hm=be41b8ba98080effaf328212987127114eab48b58063a49900591302c23338ea&"
            }
          >
            <div>CV</div>
          </a>
        </Button>
        <Button>
          <a target="new" href={"https://github.com/ShahabMorgan"}>
            <div className=" flex justify-center items-center gap-3">
              <Picture
                className="size-Icon-size-button"
                src={gitHubPic}
              ></Picture>
              <div>GitHub</div>
            </div>
          </a>
        </Button>
      </div>
    </div>
  );
}
