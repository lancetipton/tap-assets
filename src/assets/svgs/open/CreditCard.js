import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgCreditCard = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={
        "M.25 1C.11 1 0 1.11 0 1.25V2h8v-.75C8 1.11 7.89 1 7.75 1H.25zM0 3v3.75c0 .14.11.25.25.25h7.5c.14 0 .25-.11.25-.25V3H0zm1 2h1v1H1V5zm2 0h1v1H3V5z"
      }
    />
  );
};
