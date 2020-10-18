import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgTree = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M15.25 12H15V8.75C15 7.785 14.215 7 13.25 7H9V5h.25c.412 0 .75-.338.75-.75v-2.5A.752.752 0 009.25 1h-2.5a.752.752 0 00-.75.75v2.5c0 .412.338.75.75.75H7v2H2.75C1.785 7 1 7.785 1 8.75V12H.75a.753.753 0 00-.75.75v2.5c0 .412.338.75.75.75h2.5c.413 0 .75-.338.75-.75v-2.5a.752.752 0 00-.75-.75H3V9h4v3h-.25a.753.753 0 00-.75.75v2.5c0 .412.338.75.75.75h2.5c.412 0 .75-.338.75-.75v-2.5a.753.753 0 00-.75-.75H9V9h4v3h-.25a.753.753 0 00-.75.75v2.5c0 .412.338.75.75.75h2.5c.412 0 .75-.338.75-.75v-2.5a.753.753 0 00-.75-.75zM3 15H1v-2h2v2zm6 0H7v-2h2v2zM7 4V2h2v2H7zm8 11h-2v-2h2v2z"
      }
    />
  );
};