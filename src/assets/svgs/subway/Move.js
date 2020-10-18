import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgMove = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 512 512"}
      delta={
        "M512 256L405.3 149.3v85.4h-128v-128h85.4L256 0 149.3 106.7h85.4v128h-128v-85.4L0 256l106.7 106.7v-85.4h128v128h-85.4L256 512l106.7-106.7h-85.4v-128h128v85.4z"
      }
    />
  );
};
