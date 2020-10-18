import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgCrop = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 512 512"}
      delta={
        "M512 21.3V0h-21.3l-85.3 85.3H128V0H85.3v85.3H0V128h85.3v298.7H384V512h42.7v-85.3H512V384h-85.3V106.7L512 21.3zM128 128h234.7L128 362.7V128zm256 256H149.3L384 149.3V384z"
      }
    />
  );
};