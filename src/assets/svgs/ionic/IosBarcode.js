import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgIosBarcode = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 512 512"}
      delta={
        "M48 128v256h416V128H48zm80 192h-16V192h16v128zm64 32h-16V160h16v192zm71-16h-16V176h16v160zm73 16h-16V160h16v192zm64-32h-16V192h16v128z"
      }
    />
  );
};
