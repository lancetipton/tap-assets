import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgIosCalendar = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 512 512"}
      delta={
        "M64 192h384v256H64zm384-96h-96v48h-16V96H176v48h-16V96H64v80h384zM160 64h16v32h-16zm176 0h16v32h-16z"
      }
    />
  );
};
