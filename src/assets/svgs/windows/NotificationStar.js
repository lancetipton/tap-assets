import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const NotificationStar = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 76 76"}
      delta={
        "M13 25h6.524l2.143-6 2.142 6h6.524L24.9 28.892 27.333 35l-5.666-3.333-5 3.333L18 30.74v-.727l.186.134.364-1.164L13 25zm44 0a3 3 0 013 3v22a3 3 0 01-3 3H21a3 3 0 01-3-3V36.472l3.833-2.555L29.443 38H23v2h22v-2H30.201l-1.392-4H52v-2H28.114l-.835-2.398L33.489 25H57zM23 44v2h29v-2H23z"
      }
    />
  );
};
