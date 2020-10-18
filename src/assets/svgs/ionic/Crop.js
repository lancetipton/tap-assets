import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Crop = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 512 512"}
      delta={
        "M352 432h64v48h-64zm64-80V96H176v64h176v192H160V32H96v64H32v64h64v256h384v-64z"
      }
    />
  );
};
