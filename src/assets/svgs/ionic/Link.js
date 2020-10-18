import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgLink = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 512 512"}
      delta={
        "M256.5 208h-.5.5zm112-48H320s26 17 31.6 48h16.9c17.6 0 31.5 13.9 31.5 31.5v32c0 17.6-13.9 32.5-31.5 32.5h-112c-17.6 0-32.5-14.9-32.5-32.5V240h-48v31.5c0 11.5 2.5 22.5 6.9 32.5 12.6 28.2 40.9 48 73.6 48h112c44.2 0 79.5-36.3 79.5-80.5v-32c0-44.2-35.3-79.5-79.5-79.5z"
      }
    />
  );
};
