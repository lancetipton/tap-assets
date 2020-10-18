import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgKeyboard = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 1344 1344"}
      delta={
        "M1184 320H160c-35.2 0-64 28.8-64 64v640c0 35.2 28.8 64 64 64h1024c35.2 0 64-28.8 64-64V384c0-35.2-28.8-64-64-64zM736 448h128v128H736V448zm192 192v128H800V640h128zM544 448h128v128H544V448zm192 192v128H608V640h128zM352 448h128v128H352V448zm192 192v128H416V640h128zM224 448h64v128h-64V448zm0 192h128v128H224V640zm64 320h-64V832h64v128zm576 0H352V832h512v128zm256 0H928V832h192v128zm0-192H992V640h128v128zm0-192H928V448h192v128z"
      }
    />
  );
};
