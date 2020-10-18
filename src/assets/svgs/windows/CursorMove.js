import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgCursorMove = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 76 76"}
      delta={
        "M25 36h11V25h-5l7-7 7 7h-5v11h11v-5l7 7-7 7v-5H40v11h5l-7 7-7-7h5V40H25v5l-7-7 7-7v5z"
      }
    />
  );
};
