import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgCalculator = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 512 512"}
      delta={
        "M400 32H112c-8.8 0-16 7.2-16 16v416c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16zM144 208h32v32h-32v-32zm0 64h32v32h-32v-32zm0 64h32v32h-32v-32zm96 96h-96v-32h96v32zm0-64h-32v-32h32v32zm0-64h-32v-32h32v32zm0-64h-32v-32h32v32zm64 192h-32v-32h32v32zm0-64h-32v-32h32v32zm0-64h-32v-32h32v32zm0-64h-32v-32h32v32zm64 192h-32v-96h32v96zm0-128h-32v-32h32v32zm0-64h-32v-32h32v32zm0-80H144V80h224v80z"
      }
    />
  );
};
