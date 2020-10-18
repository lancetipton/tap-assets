import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgCover = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 512 512"}
      delta={
        "M469.3 106.7H42.7v-64h298.7v42.7H384V42.7C384 19.1 364.9 0 341.3 0H42.7C19.1 0 0 19.1 0 42.7v426.7C0 492.9 19.1 512 42.7 512h426.7c23.6 0 42.7-19.1 42.7-42.7V384H405.3c-23.6 0-42.7-19.1-42.7-42.7v-64c0-23.5 19.1-42.7 42.7-42.7H512v-85.3c0-23.5-19.1-42.6-42.7-42.6zm-64 234.6H512v-64H405.3v64z"
      }
    />
  );
};
