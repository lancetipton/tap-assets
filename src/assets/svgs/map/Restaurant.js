import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Restaurant = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 50 50"}
      delta={
        "M22 1.932V13h-2V2a1 1 0 00-2 0v11h-2V1.964c0-1.287-2-1.243-2-.033V13h-2V2.01c0-1.363-2-1.313-2-.054v14.472c0 2.087 2 3.463 4 3.463V46c0 4 6 4 6 0V19.892c2 0 4-1.662 4-3.227V1.964c0-1.275-2-1.226-2-.032zM31 5v25h2v16c0 4 7 4 7 0V5c0-5-9-5-9 0z"
      }
    />
  );
};
