import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgBringToBottom = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M14 8h-1V6a2 2 0 00-2-2H8V2a2 2 0 00-2-2H2a2 2 0 00-2 2v4a2 2 0 002 2h2v3a2 2 0 002 2h2v1a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2zm-8 4c-.551 0-1-.449-1-1V8h1a2 2 0 002-2V5h3c.551 0 1 .449 1 1v2h-2a2 2 0 00-2 2v2H6z"
      }
    />
  );
};
