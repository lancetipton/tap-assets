import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgTrash = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 1792 1792"}
      delta={
        "M628 236h300q41 0 70.5 29.5T1028 336v100h275q10 0 17.5 7.5t7.5 17.5v75H228v-75q0-10 7.5-17.5T253 436h275V336q0-41 29.5-70.5T628 236zm0 100v100h300V336H628zm600 300v800q0 41-29.5 70.5T1128 1536H428q-41 0-70.5-29.5T328 1436V636h900zM428 736v700h100V736H428zm200 0v700h100V736H628zm200 0v700h100V736H828zm200 0v700h100V736h-100z"
      }
    />
  );
};
