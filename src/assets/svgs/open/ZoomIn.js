import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const ZoomIn = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={
        "M3.5 0C1.57 0 0 1.57 0 3.5S1.57 7 3.5 7c.61 0 1.19-.16 1.69-.44a1 1 0 00.09.13l1 1.03a1.02 1.02 0 101.44-1.44l-1.03-1a1 1 0 00-.13-.09c.27-.5.44-1.08.44-1.69C7 1.57 5.43 0 3.5 0zm0 1C4.89 1 6 2.11 6 3.5c0 .59-.2 1.14-.53 1.56l-.03.03a1 1 0 00-.06.03 1 1 0 00-.25.28c-.44.37-1.01.59-1.63.59-1.39 0-2.5-1.11-2.5-2.5S2.11.99 3.5.99zM3 2v1H2v1h1v1h1V4h1V3H4V2H3z"
      }
    />
  );
};
