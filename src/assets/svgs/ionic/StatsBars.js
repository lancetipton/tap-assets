import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgStatsBars = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 512 512"}
      delta={
        "M176 96h64v320h-64zM80 320h64v96H80zm192-64h64v160h-64zm96-64h64v224h-64z"
      }
    />
  );
};
