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
        <Button>
          <a
            target="new "
            href={
              "https://cdn.discordapp.com/attachments/508702069138653199/1327032281008832553/MahdiShahabiZadeh-Resume.pdf?ex=6781969e&is=6780451e&hm=acbb017f7eefb43fe999f6b0e5e7ad395ad5bd0935b0f14bd203f597399b4a29&"
            }
          >
            <div>CV</div>
          </a>
        </Button>
        <Button>
          <a target="new" href={"https://github.com/ShahabMorgan"}>
            <div className="flex items-center justify-center gap-3 ">
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
