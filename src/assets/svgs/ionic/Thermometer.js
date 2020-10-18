import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgThermometer = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 512 512"}
      delta={
        "M303 335.6V78.4c0-25.7-21-46.5-47-46.5s-47 20.8-47 46.5v256.8c-20 14.5-32.9 38.2-32.9 64.9 0 44.2 36 80 80.2 80s79.8-35.8 79.8-80c-.1-26.5-13.1-50-33.1-64.5zM241 78.4c0-8 6.7-14.5 15-14.5s15 6.5 15 14.5V128h-30V78.4zM272 288h-16v-16h16v16zm0-32h-16v-64h16v64z"
      }
    />
  );
};
