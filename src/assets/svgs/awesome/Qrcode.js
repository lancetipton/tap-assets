import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgQrcode = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 1792 1792"}
      delta={
        "M576 1152v128H448v-128h128zm0-768v128H448V384h128zm768 0v128h-128V384h128zM320 1407h384v-383H320v383zm0-767h384V256H320v384zm768 0h384V256h-384v384zM832 896v640H192V896h640zm512 512v128h-128v-128h128zm256 0v128h-128v-128h128zm0-512v384h-384v-128h-128v384H960V896h384v128h128V896h128zM832 128v640H192V128h640zm768 0v640H960V128h640z"
      }
    />
  );
};
