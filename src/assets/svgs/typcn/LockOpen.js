import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const LockOpen = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 24 24"}
      delta={
        "M18 4c-2.206 0-4 1.795-4 4v3h-4v-1H7c-1.103 0-2 .896-2 2v7c0 1.104.897 2 2 2h10c1.103 0 2-.896 2-2v-7c0-1.104-.897-2-2-2h-1V8c0-1.104.897-2 2-2s2 .896 2 2v3a1 1 0 102 0V8c0-2.205-1.794-4-4-4zm-6 14.299a1.3 1.3 0 110-2.6 1.3 1.3 0 010 2.6z"
      }
    />
  );
};
