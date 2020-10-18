import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Percent = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M11.66 3.125L5.152 13.617c-.167.286-.354.43-.562.43a.59.59 0 01-.359-.137.426.426 0 01-.18-.355c0-.109.052-.242.156-.398l6.547-10.578c.114-.192.215-.337.301-.434S11.264 2 11.426 2c.156 0 .282.046.379.137a.48.48 0 01.144.363c0 .109-.096.317-.289.625zM5 3c.551 0 1 .449 1 1v2c0 .551-.449 1-1 1s-1-.449-1-1V4c0-.551.449-1 1-1m0-1a2 2 0 00-2 2v2a2 2 0 004 0V4a2 2 0 00-2-2zm6 7a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1m0-1a2 2 0 00-2 2v2a2 2 0 004 0v-2a2 2 0 00-2-2z"
      }
    />
  );
};
