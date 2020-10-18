import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Ticket = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M9 5l2 2-4 4-2-2zm6.649-.351L14.5 3.5 14 4a1.414 1.414 0 11-1.999-2l.5-.5L11.352.351a1.208 1.208 0 00-1.703 0L.352 9.648a1.208 1.208 0 000 1.703L1.501 12.5 2 12.001A1.414 1.414 0 114 14l-.5.5 1.149 1.149a1.208 1.208 0 001.703 0l9.297-9.297a1.208 1.208 0 000-1.703zM7 13L3 9l6-6 4 4-6 6z"
      }
    />
  );
};
