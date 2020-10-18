import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Spotify = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.559-8-8-8zm3.681 11.559c-.159.241-.441.319-.681.159-1.881-1.159-4.241-1.4-7.041-.759-.281.081-.519-.119-.6-.359-.081-.281.119-.519.359-.6 3.041-.681 5.681-.4 7.759.881.281.119.322.438.203.678zm.96-2.2c-.2.281-.559.4-.841.2C9.641 8.24 6.359 7.84 3.841 8.64c-.319.081-.681-.081-.759-.4-.081-.319.081-.681.4-.759 2.919-.881 6.519-.441 9 1.081.238.119.359.519.159.797zm.078-2.24C10.16 5.6 5.878 5.438 3.438 6.2a.749.749 0 01-.919-.481c-.119-.4.119-.8.481-.919 2.841-.841 7.519-.681 10.481 1.081.359.2.481.681.281 1.041-.203.278-.681.397-1.044.197z"
      }
    />
  );
};
