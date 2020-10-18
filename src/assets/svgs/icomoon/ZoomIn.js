import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const ZoomIn = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M15.504 13.616l-3.79-3.223c-.392-.353-.811-.514-1.149-.499a6 6 0 10-.672.672c-.016.338.146.757.499 1.149l3.223 3.79c.552.613 1.453.665 2.003.115s.498-1.452-.115-2.003zM6 10a4 4 0 110-8 4 4 0 010 8zm1-7H5v2H3v2h2v2h2V7h2V5H7z"
      }
    />
  );
};
