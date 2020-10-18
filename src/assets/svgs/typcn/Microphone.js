import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Microphone = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 24 24"}
      delta={
        "M12 16c2.206 0 4-1.795 4-4V6c0-2.206-1.794-4-4-4S8 3.794 8 6v6c0 2.205 1.794 4 4 4zm7-4v-2a1 1 0 10-2 0v2c0 2.757-2.243 5-5 5s-5-2.243-5-5v-2a1 1 0 10-2 0v2c0 3.52 2.613 6.432 6 6.92V20H8a1 1 0 100 2h8a1 1 0 100-2h-3v-1.08c3.387-.488 6-3.4 6-6.92z"
      }
    />
  );
};
