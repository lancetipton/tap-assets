import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const ChatBubble = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 48 48"}
      delta={
        "M40 4H8C5.79 4 4 5.79 4 8v36l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4z"
      }
    />
  );
};
