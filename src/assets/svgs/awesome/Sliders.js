import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Sliders = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 1792 1792"}
      delta={
        "M480 1408v128H128v-128h352zm352-128q26 0 45 19t19 45v256q0 26-19 45t-45 19H576q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h256zm160-384v128H128V896h864zM352 384v128H128V384h224zm1312 1024v128H928v-128h736zM704 256q26 0 45 19t19 45v256q0 26-19 45t-45 19H448q-26 0-45-19t-19-45V320q0-26 19-45t45-19h256zm640 512q26 0 45 19t19 45v256q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45V832q0-26 19-45t45-19h256zm320 128v128h-224V896h224zm0-512v128H800V384h864z"
      }
    />
  );
};
