import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgPilcrow = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={"M6 0h8v2h-2v14h-2V2H8v14H6V8a4 4 0 010-8z"}
    />
  );
};
