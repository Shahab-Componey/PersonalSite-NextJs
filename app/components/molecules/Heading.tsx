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
              "https://filebrowser-hotaka.liara.cloud/v1/projects/6772767238eb7250c2c3270c/disks/media/serve?path=./Resume.png&type=preview&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoicHJldmlldyIsInBhdGgiOiIuL1Jlc3VtZS5wbmciLCJkaXNrTmFtZSI6Im1lZGlhIiwicmVhbE5hbWUiOiI2NzcyNzY3MjM4ZWI3MjUwYzJjMzI3MGMtYTJlNTg5YTYtMDg4Yy00NzFlLWIxZjEtZTI3NGU3NGEwNzc3IiwiZmlsZU5hbWUiOiJSZXN1bWUucG5nIiwicHJvamVjdElEIjoiNjc3Mjc2NzIzOGViNzI1MGMyYzMyNzBjIiwiaWF0IjoxNzM2OTc1Mjg5LCJleHAiOjE3MzY5OTY4ODl9.416yL2hlmjClQoph__A-78Y7U7PcJbk7p3iBaoRCqy0"
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
