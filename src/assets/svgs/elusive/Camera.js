import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Camera = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 1200 1200"}
      delta={
        "M390.724 148.172L352.97 300H0v751.828h1200V300H863.484L825.73 148.172h-435zm212.342 151.537c186.396 0 337.453 151.067 337.453 337.454 0 186.396-151.069 337.453-337.453 337.453-186.396 0-337.454-151.07-337.454-337.453 0-186.397 151.067-337.454 337.454-337.454zm395.718 73.463h170.121v98.78h-170.12v-98.78zm-395.718 26.196c-131.337 0-237.797 106.47-237.797 237.797 0 131.337 106.47 237.797 237.797 237.797 131.336 0 237.796-106.47 237.796-237.797 0-131.337-106.469-237.797-237.796-237.797z"
      }
    />
  );
};
