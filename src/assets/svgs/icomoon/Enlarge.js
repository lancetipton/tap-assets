import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Enlarge = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M16 0H9.5L12 2.5l-3 3L10.5 7l3-3L16 6.5zm0 16V9.5L13.5 12l-3-3L9 10.5l3 3L9.5 16zM0 16h6.5L4 13.5l3-3L5.5 9l-3 3L0 9.5zM0 0v6.5L2.5 4l3 3L7 5.5l-3-3L6.5 0z"
      }
    />
  );
};
