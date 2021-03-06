import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Header = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 1792 1792"}
      delta={
        "M1328 436v56q-4 0-11 .5t-24 3-30 7.5-24 15-11 24v888q0 22 25 34.5t50 13.5l25 2v56H928v-56q75 0 87.5-6.5t12.5-43.5v-394H528v394q0 37 12.5 43.5t87.5 6.5v56H228v-56q4 0 11-.5t24-3 30-7.5 24-15 11-24V542q0-22-25-34.5T253 494l-25-2v-56h400v56q-75 0-87.5 6.5T528 542v394h500V542q0-37-12.5-43.5T928 492v-56h400z"
      }
    />
  );
};
