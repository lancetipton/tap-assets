import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Timer = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={
        "M2 0v1h1v.03A3.503 3.503 0 003.5 8C5.43 8 7 6.43 7 4.5c0-.45-.1-.87-.25-1.25l-.91.38c.11.29.16.57.16.88 0 1.39-1.11 2.5-2.5 2.5S1 5.9 1 4.51s1.11-2.5 2.5-2.5c.3 0 .59.05.88.16l.34-.94c-.23-.08-.47-.12-.72-.16v-.06h1v-1H2zm5 1.16s-3.65 2.81-3.84 3c-.19.2-.19.49 0 .69.19.2.49.2.69 0 .2-.2 3.16-3.69 3.16-3.69z"
      }
    />
  );
};
