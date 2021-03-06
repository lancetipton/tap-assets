import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Skull = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 32 32"}
      delta={
        "M16 0C6 0 2 4 2 14v8l4 2v6h20v-6l4-2v-8C30 4 26 0 16 0M9 12a4.5 4.5 0 010 9 4.5 4.5 0 010-9m14 0a4.5 4.5 0 010 9 4.5 4.5 0 010-9"
      }
    />
  );
};
