import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgSearch = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 1200 1200"}
      delta={
        "M672.633 0C389.326 0 159.635 229.652 159.635 512.958c0 100.662 28.986 194.563 79.083 273.79-.368.16-.729.305-1.098.471L14.409 1010.391 204.019 1200l231.249-231.288c-.07-.326-.163-.652-.235-.98 71.035 37.191 151.865 58.224 237.601 58.224 283.307 0 512.958-229.69 512.958-512.997C1185.591 229.652 955.939 0 672.633 0zm0 227.877c157.442 0 285.042 127.639 285.042 285.081s-127.6 285.081-285.042 285.081S387.552 670.4 387.552 512.958 515.19 227.877 672.633 227.877z"
      }
    />
  );
};