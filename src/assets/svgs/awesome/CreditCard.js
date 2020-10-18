import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const CreditCard = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 2240 2240"}
      delta={
        "M1920 512q66 0 113 47t47 113v1216q0 66-47 113t-113 47H320q-66 0-113-47t-47-113V672q0-66 47-113t113-47h1600zM320 640q-13 0-22.5 9.5T288 672v224h1664V672q0-13-9.5-22.5T1920 640H320zm1600 1280q13 0 22.5-9.5t9.5-22.5v-608H288v608q0 13 9.5 22.5t22.5 9.5h1600zM416 1792v-128h256v128H416zm384 0v-128h384v128H800z"
      }
    />
  );
};
