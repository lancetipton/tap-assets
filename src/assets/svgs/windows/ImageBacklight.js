import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const ImageBacklight = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 76 76"}
      delta={
        "M17 20h42v36H17V20zm3 3v30h36V23H20zm16.222 27v-1.556l3.556.667V50h-3.556zm-1.778-2.889v-1.555l7.111.889V48l-7.11-.889zm7.111-1.778l-7.11-.889V42.89l7.11.889v1.555zM38 26c3.927 0 7.111 3.383 7.111 7.556 0 2.796-3.555 5.534-3.555 6.544v2.789L34.444 42v-1.9c0-.767-3.555-3.748-3.555-6.544C30.889 29.383 34.073 26 38 26z"
      }
    />
  );
};
