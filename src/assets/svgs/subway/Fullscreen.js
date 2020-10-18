import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgFullscreen = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 512 512"}
      delta={
        "M93.1 139.6l46.5-46.5-46.5-46.6L139.6 0H0v139.6l46.5-46.5 46.6 46.5zm0 232.8l-46.5 46.5L0 372.4V512h139.6l-46.5-46.5 46.5-46.5-46.5-46.6zm279.3-232.8H139.6v232.7h232.7V139.6zm-46.6 186.2H186.2V186.2h139.6v139.6zM372.4 0l46.5 46.5L372.4 93l46.5 46.5L465.4 93l46.5 46.5V0H372.4zm46.5 372.4l-46.5 46.5 46.5 46.5-46.5 46.6H512V372.4l-46.5 46.5-46.6-46.5z"
      }
    />
  );
};