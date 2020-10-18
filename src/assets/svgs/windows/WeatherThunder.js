import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const WeatherThunder = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 76 76"}
      delta={
        "M49.083 23.75A7.917 7.917 0 0157 31.667c0 4.372-3.544 7.916-7.949 7.916H22.958a3.958 3.958 0 01-.725-7.85l-.066-.858a5.542 5.542 0 015.288-5.536 9.504 9.504 0 0117.709-.552 7.88 7.88 0 013.92-1.037zm.792 17.417l-5.938 5.937h5.278L38.66 57l4.222-7.917H38l5.278-7.916h6.597zm-15.438 0l-5.343 5.343h4.75l-9.5 8.907 3.8-7.125H23.75l4.75-7.125h5.938z"
      }
    />
  );
};
