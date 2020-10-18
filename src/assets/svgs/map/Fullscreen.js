import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgFullscreen = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 50 50"}
      delta={
        "M2 15.758V2h14.299l5.262 4h-8.769L22 15.758 16.299 21 7 12.251v8.769zM33.752 2H48v13.809l-4 5.261v-8.768L33.997 21.51l-5.364-5.456L37.259 7H28.49zM48 33.752V48H33.701l-5.262-4h8.769L28 33.997l5.701-5.364L43 37.259V28.49zM16.248 48H2V33.701l4-5.262v8.769L16.003 28l5.364 5.701L12.741 43h8.769z"
      }
    />
  );
};
