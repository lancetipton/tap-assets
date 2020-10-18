import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgCompass = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 512 512"}
      delta={
        "M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 472.6c-119.6 0-216.6-97-216.6-216.6S136.4 39.4 256 39.4s216.6 97 216.6 216.6-97 216.6-216.6 216.6zm-137.8-78.8l187.1-88.6 88.6-187.1-187.1 88.6-88.6 187.1zm167.3-108.3l-118.2 59.1 59.1-118.2 59.1 59.1z"
      }
    />
  );
};
