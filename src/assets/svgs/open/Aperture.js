import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Aperture = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={
        "M4 0c-.69 0-1.34.19-1.91.5l3.22 2.34.75-2.25C5.46.23 4.75 0 4 0zM1.25 1.13C.49 1.86 0 2.87 0 4.01c0 .25.02.48.06.72l3.09-2.22-1.91-1.38zm5.63.13L5.66 5.01h2.19c.08-.32.16-.65.16-1 0-1.07-.44-2.03-1.13-2.75zM2.16 4.48L.41 5.73c.55 1.13 1.6 1.99 2.88 2.22L2.16 4.48zm1.56 1.53l.63 1.97c1.33-.12 2.46-.88 3.09-1.97H3.72z"
      }
    />
  );
};
