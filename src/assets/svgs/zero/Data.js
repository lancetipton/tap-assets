import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Data = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M8 1C4.687 1 2 2.343 2 4v8.479h.034c.315 1.508 2.865 2.684 5.966 2.684 3.242 0 5.877-1.286 5.989-2.895H14V4c0-1.657-2.687-3-6-3zm0 1c3.052 0 5 1.185 5 2s-1.948 2-5 2-5-1.185-5-2 1.948-2 5-2zm0 12.163c-3.052 0-5-1.185-5-2V5.657C4.075 6.466 5.912 7 8 7s3.926-.534 5-1.343v6.506c0 .816-1.948 2-5 2z"
      }
    />
  );
};
