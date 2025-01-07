import React from "react";
import Name from "../attoms/Name";
import Text from "../attoms/Text";
export default function ShareContact() {
  return (
    <div className="flex flex-col w-max-share-contact gap-y-Contact-gap lg:text-center">
      <Name></Name>
      <Text className="text-regular text-Contact-discrption">
        If you liked my work and you need me,
        <br /> I'm ready to talk to you.
      </Text>
    </div>
  );
}
