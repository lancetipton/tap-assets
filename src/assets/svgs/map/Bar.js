import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgBar = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 50 50"}
      delta={
        "M4 1l5.6 45.18c.175 1.409 1.399 2.82 2.801 2.82h25.198c1.401 0 2.627-1.411 2.799-2.82L46 1H4zm6.3 5.646h29.399l-1.312 11.295H11.613L10.3 6.646z"
      }
    />
  );
};
