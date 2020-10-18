import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const PaintFormat = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M16 9V3h-3V2c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V4h2v4H6v2h-.5a.5.5 0 00-.5.5v5a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5H7V9h9zm-4-6H1V2h11v1z"
      }
    />
  );
};
