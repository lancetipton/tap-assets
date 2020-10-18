import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgChatbubble = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 512 512"}
      delta={
        "M256 449.4c28.9 0 56.4-5.7 81.3-15.9.6-.3 1.1-.5 1.7-.7.1 0 .2 0 .2-.1 3.5-1.3 7.3-2 11.2-2 4.3 0 8.4.8 12.1 2.4l84 30.9-22.1-88.4c0-5.3 1.5-10.3 3.9-14.6.8-1.3 1.6-2.6 2.5-3.7 20.9-31.3 33-68.5 33-108.4C464 137.9 370.9 48 256 48S48 137.9 48 248.7c0 110.9 93.1 200.7 208 200.7z"
      }
    />
  );
};
