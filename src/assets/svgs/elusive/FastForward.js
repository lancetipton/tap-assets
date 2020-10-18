import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const FastForward = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 1200 1200"}
      delta={
        "M1200 0v1200h-200V650l-500 500V650L0 1150V50l500 500V50l500 500V0z"
      }
    />
  );
};
