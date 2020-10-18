import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Freeze = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M6 1H1v14h14V1H6zm6.439 1L14 3.561v1.336L11.104 2h1.335zM6 2h.439l3 3H7.604l-3-3H6zM2 2h1.189l3 3H5v.631l-3-3V2zm0 2.045l3 3v1.836l-3-3V4.045zm0 3.25l3 3v1.836l-3-3V7.295zM3.619 14L2 12.381v-1.836l3 3V14H3.619zM14 14H6v-3h8v3zm0-4H6V6h8v4zm-3.146-5l-3-3H9.69l3 3h-1.836z"
      }
    />
  );
};
