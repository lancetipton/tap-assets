import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const FloppyDisk = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M14 0H0v16h16V2l-2-2zM8 2h2v4H8V2zm6 12H2V2h1v5h9V2h1.172l.828.828V14z"
      }
    />
  );
};
