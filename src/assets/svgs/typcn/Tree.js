import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgTree = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 24 24"}
      delta={
        "M20.781 17.375L18.081 14H19a.999.999 0 00.819-1.573l-7-10a1.001 1.001 0 00-1.393-.246.968.968 0 00-.221.231c-.025.015-7.025 10.015-7.025 10.015A1 1 0 005 14h.919l-2.7 3.375c-.24.301-.287.712-.121 1.059.167.345.518.566.902.566h7v3a1 1 0 102 0v-3h7a1.001 1.001 0 00.781-1.625zM13 17v-5a1 1 0 10-2 0v5H6.081l2.7-3.375c.24-.301.287-.712.121-1.059A1.004 1.004 0 008 12H6.92L12 4.744 17.08 12H16a1.001 1.001 0 00-.78 1.625L17.92 17H13z"
      }
    />
  );
};