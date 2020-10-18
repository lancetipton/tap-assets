import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgShield = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={
        "M4 0l-.19.09-3.5 1.47-.31.13V2c0 1.66.67 3.12 1.47 4.19.4.53.83.97 1.25 1.28.42.31.83.53 1.28.53.46 0 .86-.22 1.28-.53.42-.31.85-.75 1.25-1.28C7.33 5.12 8 3.66 8 2v-.31l-.31-.13L4.19.09 4 0zm0 1.09V7c-.04 0-.33-.07-.66-.31s-.71-.63-1.06-1.09a6.26 6.26 0 01-1.22-3.28L4 1.1z"
      }
    />
  );
};
