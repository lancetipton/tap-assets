import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const HSquare = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 1792 1792"}
      delta={
        "M1408 1344V448q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v320H640V448q0-26-19-45t-45-19H448q-26 0-45 19t-19 45v896q0 26 19 45t45 19h128q26 0 45-19t19-45v-320h512v320q0 26 19 45t45 19h128q26 0 45-19t19-45zm256-928v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z"
      }
    />
  );
};
