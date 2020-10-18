import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Pushpin = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M8.5 0L7 1.5 8.5 3 5 7H1.5l2.75 2.75L0 15.385V16h.615l5.635-4.25L9 14.5V11l4-3.5L14.5 9 16 7.5 8.5 0zM7 8.5l-1-1L9.5 4l1 1L7 8.5z"
      }
    />
  );
};
