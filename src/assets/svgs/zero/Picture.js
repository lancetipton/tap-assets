import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgPicture = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M6.608 6.323a1.323 1.323 0 11-2.646 0 1.323 1.323 0 012.646 0zM12.821 12s-.546-4.288-2.182-4.288c-1.637 0-2.183 2.108-3.272 2.108-1.093 0-1.093-.527-2.184-.527C4.092 9.293 3 12 3 12h9.821zM14 2H2v11h12V2m0-1a1 1 0 011 1v11a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h12z"
      }
    />
  );
};
