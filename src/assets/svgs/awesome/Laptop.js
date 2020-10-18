import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Laptop = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 2240 2240"}
      delta={
        "M576 1664q-66 0-113-47t-47-113V800q0-66 47-113t113-47h1088q66 0 113 47t47 113v704q0 66-47 113t-113 47H576zm-32-864v704q0 13 9.5 22.5t22.5 9.5h1088q13 0 22.5-9.5t9.5-22.5V800q0-13-9.5-22.5T1664 768H576q-13 0-22.5 9.5T544 800zm1376 928h160v96q0 40-47 68t-113 28H320q-66 0-113-28t-47-68v-96h1760zm-720 96q16 0 16-16t-16-16h-160q-16 0-16 16t16 16h160z"
      }
    />
  );
};
