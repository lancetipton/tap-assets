import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgZoom = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 24 24"}
      delta={
        "M13 4c-3.859 0-7 3.141-7 7 0 .763.127 1.495.354 2.183l-.749.75-.511.512-1.008 1.045a3.076 3.076 0 00-.891 2.185 3.134 3.134 0 003.13 3.131c.757 0 1.504-.278 2.104-.784l.064-.055.061-.061 1.512-1.51.75-.749A6.983 6.983 0 0013 18c3.859 0 7-3.141 7-7s-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm0-9c-2.205 0-4 1.794-4 4s1.795 4 4 4 4-1.794 4-4-1.795-4-4-4zm0 7a3.001 3.001 0 010-6 3.001 3.001 0 010 6z"
      }
    />
  );
};
