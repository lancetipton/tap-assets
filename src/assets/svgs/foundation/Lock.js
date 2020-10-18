import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Lock = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 100 100"}
      delta={
        "M82.105 44.218h-8.858v-8.431c.003-.036.003-.071.003-.102 0-13.073-10.636-23.71-23.713-23.71-13.073 0-23.71 10.637-23.71 23.71v8.533h-7.931a2.62 2.62 0 00-2.621 2.621v38.565a2.62 2.62 0 002.621 2.621h64.21a2.62 2.62 0 002.621-2.621V46.839a2.621 2.621 0 00-2.622-2.621zm-42.314-8.533c0-5.375 4.371-9.741 9.746-9.741 5.341 0 9.695 4.32 9.747 9.649l-.003.031h.003v8.594H39.791v-8.533z"
      }
    />
  );
};
