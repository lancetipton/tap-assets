import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Dislike = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 100 100"}
      delta={
        "M82.533 29.788h-.006a1.27 1.27 0 00-.369-.894l.003-.003-9.764-9.764-.024.024a1.246 1.246 0 00-.967-.272H35.304c-.073-.006-.143-.022-.218-.022a2.53 2.53 0 00-2.523 2.406h-.008v.082c0 .017-.005.032-.005.048s.005.032.005.048v36.498h.001l-.001.009a2.537 2.537 0 002.537 2.537c.047 0 .09-.011.136-.014h9.931c.15.244.334.453.536.637l.109.188v.109h.063l9.709 16.816.025-.014c.99 1.753 2.847 2.936 4.98 2.936 3.171 0 5.742-2.607 5.742-5.825h.058V60.471h13.684v-.019a2.531 2.531 0 002.461-2.513h.008V29.788zm-55.126-3.915v-.009a2.536 2.536 0 00-2.537-2.536c-.047 0-.091.011-.137.014h-4.798v.018a2.531 2.531 0 00-2.461 2.513h-.008v27.502h.043a2.523 2.523 0 002.426 2.287v.022h4.971c1.4 0 2.536-1.136 2.536-2.537 0-.12-.019-.234-.035-.35V25.873z"
      }
    />
  );
};
