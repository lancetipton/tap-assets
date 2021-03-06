import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const ObjectGroup = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 2389 2389"}
      delta={
        "M2218.667 896h-128v1024h128v384h-384v-128h-1280v128h-384v-384h128V896h-128V512h384v128h1280V512h384v384zm-256-256v128h128V640h-128zm-1664 0v128h128V640h-128zm128 1536v-128h-128v128h128zm1408-128v-128h128V896h-128V768h-1280v128h-128v1024h128v128h1280zm256 128v-128h-128v128h128zm-640-1024h384v768h-896v-256h-384V896h896v256zm-768 384h640v-512h-640v512zm1024 256v-512h-256v384h-384v128h640z"
      }
    />
  );
};
