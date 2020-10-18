import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgImageGallery = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 76 76"}
      delta={
        "M22 19h32v3h7v30h-7v5H22v-3h-5V24h5v-5zm3 3v26h26V22H25zm8 7c0-1.719 1.397-3 3-3h4c1.603 0 3 1.281 3 3h3c1.688 0 3 1.19 3 3v10c0 1.81-1.313 3-3 3H30c-1.688 0-3-1.19-3-3V32c0-1.81 1.313-3 3-3h3zm-2.5 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm7.5 2a4 4 0 100 8 4 4 0 000-8zm0 1a3 3 0 110 6 3 3 0 010-6zm-18-7v18h2V27h-2zm34 16h4V25h-4v18z"
      }
    />
  );
};
