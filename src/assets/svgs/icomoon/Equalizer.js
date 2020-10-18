import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Equalizer = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M7 2v-.25A.752.752 0 006.25 1h-2.5a.752.752 0 00-.75.75V2H0v2h3v.25c0 .412.337.75.75.75h2.5c.412 0 .75-.338.75-.75V4h9V2H7zM4 4V2h2v2H4zm9 2.75a.753.753 0 00-.75-.75h-2.5a.753.753 0 00-.75.75V7H0v2h9v.25c0 .412.338.75.75.75h2.5c.412 0 .75-.338.75-.75V9h3V7h-3v-.25zM10 9V7h2v2h-2zm-3 2.75a.753.753 0 00-.75-.75h-2.5a.752.752 0 00-.75.75V12H0v2h3v.25c0 .412.337.75.75.75h2.5c.412 0 .75-.338.75-.75V14h9v-2H7v-.25zM4 14v-2h2v2H4z"
      }
    />
  );
};
