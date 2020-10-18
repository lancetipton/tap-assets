import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Printer = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M4 1h8v2H4V1zm11 3H1c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h3v4h8v-4h3c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM2 7a1 1 0 110-2 1 1 0 010 2zm9 7H5V9h6v5z"
      }
    />
  );
};
