import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgHeader = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={
        "M0 0v1h.5c.28 0 .5.22.5.5v4c0 .28-.22.5-.5.5H0v1h3V6h-.5c-.28 0-.5-.22-.5-.5V4h3v1.5c0 .28-.22.5-.5.5H4v1h3V6h-.5c-.28 0-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5H7V0H4v1h.5c.28 0 .5.22.5.5V3H2V1.5c0-.28.22-.5.5-.5H3V0H0z"
      }
    />
  );
};