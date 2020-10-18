import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Compass = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M8.5 16a.5.5 0 01-.5-.5V8H.5a.5.5 0 01-.211-.953l15-7a.5.5 0 01.665.665l-7 15a.5.5 0 01-.453.289zM2.754 7H8.5a.5.5 0 01.5.5v5.746l5.465-11.712L2.753 6.999z"
      }
    />
  );
};
