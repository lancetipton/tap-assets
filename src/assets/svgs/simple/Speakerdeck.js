import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Speakerdeck = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M1.067 14C.477 14 0 13.525 0 12.94V3.06C0 2.475.478 2 1.067 2h13.866c.588 0 1.065.475 1.065 1.06H16v9.88c0 .585-.478 1.06-1.067 1.06H1.067zm9.957-3.88H4.978a.71.71 0 01-.7-.707h-.005V6.587h.006c0-.386.31-.7.698-.706h6.046c.387.007.7.32.7.707h.003v2.826h-.004c0 .386-.312.7-.7.706zM7.48 6.934L5.7 8.008l1.766 1.057.013-2.13zm1.04 2.13l1.78-1.073-1.768-1.057-.01 2.13z"
      }
    />
  );
};
