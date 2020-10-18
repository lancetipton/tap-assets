import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Image = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 2240 2240"}
      delta={
        "M800 960q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1024 384v448H416v-192l320-320 160 160 512-512zm96-704H320q-13 0-22.5 9.5T288 672v1216q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5V672q0-13-9.5-22.5T1920 640zm160 32v1216q0 66-47 113t-113 47H320q-66 0-113-47t-47-113V672q0-66 47-113t113-47h1600q66 0 113 47t47 113z"
      }
    />
  );
};
