import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Text = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={
        "M0 0v2h.5c0-.55.45-1 1-1H3v5.5c0 .28-.22.5-.5.5H2v1h4V7h-.5c-.28 0-.5-.22-.5-.5V1h1.5c.55 0 1 .45 1 1H8V0H0z"
      }
    />
  );
};
