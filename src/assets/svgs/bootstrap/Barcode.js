import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Barcode = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 1792 1792"}
      delta={
        "M228 1336H128V336h100v1000zm200 0H328V336h100v1000zm400 0H628V336h200v1000zm200 0H928V336h100v1000zm300 0h-200V336h200v1000zm-800 200H228v-100h300v100zm200 0H628v-91h100v91zm200 0H828v-91h100v91zm300 0h-200v-91h200v91z"
      }
    />
  );
};
