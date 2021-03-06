import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Slash = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M2.5 1h10c.827 0 1.5.673 1.5 1.5v10c0 .827-.673 1.5-1.5 1.5h-10c-.827 0-1.5-.673-1.5-1.5v-10C1 1.673 1.673 1 2.5 1zm10 1H2.707L13 12.293V2.5c0-.275-.225-.5-.5-.5zm-10 11h9.793L2 2.707V12.5c0 .275.225.5.5.5z"
      }
    />
  );
};
