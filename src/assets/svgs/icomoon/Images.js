import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgImages = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 18 16"}
      delta={
        "M17 2h-1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h1v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zM2 3v10h-.998L1 12.998V1.002L1.002 1h13.996l.002.002V2H3c-.55 0-1 .45-1 1zm15 11.998l-.002.002H3.002L3 14.998V3.002L3.002 3h13.996l.002.002v11.996z"
      }
    />
  );
};