import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Svg = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M14.5 6.5c-.444 0-.843.193-1.118.5h-2.968l2.099-2.099a1.5 1.5 0 10-1.414-1.414L9 5.586V2.618a1.5 1.5 0 10-2 0v2.968L4.901 3.487a1.5 1.5 0 10-1.414 1.414L5.586 7H2.618a1.5 1.5 0 100 2h2.968l-2.099 2.099a1.5 1.5 0 101.414 1.414L7 10.414v2.968a1.5 1.5 0 102 0v-2.968l2.099 2.099a1.5 1.5 0 101.414-1.414L10.414 9h2.968A1.5 1.5 0 1014.5 6.5z"
      }
    />
  );
};
