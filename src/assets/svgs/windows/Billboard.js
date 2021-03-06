import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Billboard = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 76 76"}
      delta={
        "M19 43h3v-1h-3V19h38v23h-3v1h3v3H40v11h-4V46H19v-3zm29-1v1h3v-1h-3zm-6 0v1h3v-1h-3zm-5 0v1h2v-1h-2zm-6 0v1h3v-1h-3zm-6 0v1h3v-1h-3zm-5-22v21h36V20H20zm1 1h34v19H21V21zm27 36h-2.375c0-1.583-.792-4.75-.792-4.75s1.584 0 3.167 4.75zm-19 0c1.583-4.75 3.167-4.75 3.167-4.75s-1.584 3.167-1.584 4.75H29zm20.583 0c1.584-4.75 3.167-4.75 3.167-4.75s-1.583 3.167-1.583 4.75h-1.584zm-22.416 0h-2.375c0-1.583-.792-4.75-.792-4.75s1.583 0 3.167 4.75z"
      }
    />
  );
};
