import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgPicture = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 1195 1195"}
      delta={
        "M1045.333 192h-896q-26 0-45 19t-19 45v768q0 26 19 45t45 19h896q26 0 45-19t19-45V256q0-26-19-45t-45-19zm-896 64h896v714l-236-348q-7-12-21-14t-25 7l-154 125-174-243q-10-14-28-13t-26 17l-232 448V256zm855 768h-822l231-447 184 255 179-145zm-182-642q13 0 22.5 9.5t9.5 22.5-9.5 22.5-22.5 9.5-22.5-9.5-9.5-22.5 9.5-22.5 22.5-9.5zm0-64q-40 0-68 28t-28 68 28 68 68 28 68-28 28-68-28-68-68-28z"
      }
    />
  );
};