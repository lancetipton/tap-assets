import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const CameraSwitch = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 76 76"}
      delta={
        "M48 22a5 5 0 110 10 5 5 0 010-10zm4 12s10-1 9.75 19.5l-3.25.75s-.5-7.5-2.5-11.5v12.5s-3.5 1.687-7.5 1.719c-4 .031-7.75-1.719-7.75-1.719v-12.5c-2 4-2.5 11.5-2.5 11.5L35 53.5C34.75 33 44.75 34 44.75 34H52zm-25-8c0-2.623 2.377-5 5-5h6c1.818 0 3.518 1.141 4.39 2.715A6.47 6.47 0 0041.5 27a6.49 6.49 0 002.48 5.108 8.887 8.887 0 00-3.94 1.74 6.5 6.5 0 10-5.925 11.004A44.355 44.355 0 0033.232 50H22a5 5 0 01-5-5V31a5 5 0 015-5h5zm-4.5 3c-.828 0-1.5.895-1.5 2s.672 2 1.5 2 1.5-.895 1.5-2-.672-2-1.5-2z"
      }
    />
  );
};
