import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Desktop = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 2240 2240"}
      delta={
        "M1952 1376V544q0-13-9.5-22.5T1920 512H320q-13 0-22.5 9.5T288 544v832q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5zm128-832v1088q0 66-47 113t-113 47h-544q0 37 16 77.5t32 71 16 43.5q0 26-19 45t-45 19H864q-26 0-45-19t-19-45q0-14 16-44t32-70 16-78H320q-66 0-113-47t-47-113V544q0-66 47-113t113-47h1600q66 0 113 47t47 113z"
      }
    />
  );
};
