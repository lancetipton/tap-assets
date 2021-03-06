import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Location = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M7.799 2c1.281 0 2.486.5 3.392 1.407a4.761 4.761 0 011.406 3.392 4.764 4.764 0 01-1.406 3.393l-3.393 3.395-3.393-3.395A4.775 4.775 0 013 6.798c0-1.281.5-2.486 1.406-3.392A4.771 4.771 0 017.799 2m0 8c.8 0 1.554-.312 2.121-.879.566-.566.879-1.32.879-2.121 0-1.654-1.346-3-3-3s-3 1.346-3 3c0 .802.312 1.555.879 2.122A2.986 2.986 0 007.799 10m0-9a5.777 5.777 0 00-4.1 1.699 5.794 5.794 0 000 8.199L7.799 15l4.1-4.102a5.794 5.794 0 000-8.199A5.777 5.777 0 007.799 1zm0 8a1.998 1.998 0 01-2-2 2 2 0 112 2z"
      }
    />
  );
};
