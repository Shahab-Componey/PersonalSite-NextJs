import React from "react";
import Text from "../attoms/Text";
import Button from "../attoms/Button";
export default function Heading() {
  return (
    <div className="flex flex-col gap-12">
      <Text className="text-Landing-name text-mark-text font-bold">
        Mahdi Shahabi Zadeh
      </Text>
      <Text className="text-Landing-job text-regular font-bold">
        Web Developer
      </Text>
      <Button>Resume</Button>
    </div>
  );
}
