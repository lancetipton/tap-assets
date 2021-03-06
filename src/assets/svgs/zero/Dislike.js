import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Dislike = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M14.9 10.8c-.1.1-.3.2-.5.2h-3.7l.5 3.3c0 .2 0 .4-.1.5-.1.1-.3.2-.5.2H8.5c-.2 0-.4-.1-.5-.3L6.2 11H6c0 .5-.5 1-1 1H2c-.5 0-1-.5-1-1V2c0-.5.5-1 1-1h11.1c.3 0 .6.2.6.5l1.3 8.8c0 .2 0 .3-.1.5zM2 2v9h3V2H2zm10.8 0H6v8h.8l.3.6L8.8 14h1.4l-.5-2.8-.2-1.2H14l-1.2-8z"
      }
    />
  );
};
