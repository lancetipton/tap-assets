import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const ConnectionBars = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 512 512"}
      delta={
        "M80 352h64v64H80zm96-64h64v128h-64zm96-96h64v224h-64zm96-96h64v320h-64z"
      }
    />
  );
};
