import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const FreezeCell = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M12 1H1v14h14V1h-3zm-1 1v3H5V2h6zM5 8.943L6.057 10H5V8.943zM7.471 10L5 7.529V6h.307l4 4H7.471zm3.25 0l-4-4h1.836L11 8.443V10h-.279zM11 6v1.029L9.971 6H11zM2 2h2v3H2V2zm0 4h2v4H2V6zm0 8v-3h2v3H2zm3 0v-3h6v3H5zm9 0h-2v-3h2v3zm0-4h-2V6h2v4zm-2-5V2h2v3h-2z"
      }
    />
  );
};
