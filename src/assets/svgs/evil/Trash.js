import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Trash = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 50 50"}
      delta={
        "M20 18h2v16h-2zm4 0h2v16h-2zm4 0h2v16h-2zm-16-6h26v2H12zm18 0h-2v-1c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1v1h-2v-1c0-1.7 1.3-3 3-3h4c1.7 0 3 1.3 3 3v1z"
      }
    />
  );
};
