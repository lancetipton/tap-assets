import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Delete = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M13.96 5v8.954c0 .552-.349 1-.9 1H4a1 1 0 01-1-1V5H2a1 1 0 011-1h1-.026 2.05V3c0-.553.397-1 .95-1h3.05c.553 0 .95.447.95 1v1h2.986a1 1 0 011 1h-1zm-3.937-2h-3.05v1h3.05V3zm3 2h-9.05v9.017h9.05V5zm-6.062 6h-.938V7h.938v4zm4.013 0h-.95V7h.95v4z"
      }
    />
  );
};
