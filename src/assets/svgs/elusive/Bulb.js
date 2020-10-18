import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Bulb = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 1200 1200"}
      delta={
        "M600 239.201c-158.775 0-287.487 96.415-287.487 215.369l163.323 494.644h248.328l163.323-494.659c0-118.95-128.703-215.369-287.487-215.369zm0 46.997c158.775 0 240.48 128.138 240.48 168.362L724.16 799.987H475.833L359.515 454.56c0-49.63 81.704-168.362 240.48-168.362zM472.215 985.292v85.982h255.57V985.29h-255.57zm0 128.726V1200h255.57v-85.984h-255.57z"
      }
    />
  );
};
