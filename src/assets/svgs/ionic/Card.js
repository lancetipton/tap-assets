import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Card = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 512 512"}
      delta={
        "M452 96H60c-15.5 0-27.9 12.5-28 28v264c.2 15.5 12.5 28 28 28h392c15.6 0 28-12.7 28-28.3V124.3c0-15.6-12.4-28.3-28-28.3zM77.1 128h357.7c6.9 0 12.1 5.1 13.1 12v20H64v-20.3c1-6.8 6.3-11.7 13.1-11.7zm357.8 256H77.1c-6.9 0-12.1-4.9-13.1-11.7V256h384v116c-1 6.9-6.3 12-13.1 12z"
      }
    />
  );
};
