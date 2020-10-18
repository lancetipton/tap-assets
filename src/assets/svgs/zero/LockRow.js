import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const LockRow = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M15 9.5v4c0 .827-.673 1.5-1.5 1.5h-11c-.827 0-1.5-.673-1.5-1.5v-4C1 8.673 1.673 8 2.5 8H4v1H2.5c-.275 0-.5.225-.5.5v4c0 .275.225.5.5.5h11c.275 0 .5-.225.5-.5v-4c0-.275-.225-.5-.5-.5H12V8h1.5c.827 0 1.5.673 1.5 1.5zm-4-4.047v4.143c0 .23-.193.404-.439.404H5.456c-.247 0-.435-.174-.435-.404V5.453c0-.229.188-.404.435-.404h.595v-.832c0-.039-.123-2.322 1.963-2.322l.006.001c.021 0 2.002-.302 1.991 2.321v.832h.55c.246 0 .439.176.439.404zm-4.23-.404H9.2v-.832c0-1.639-1.106-1.571-1.221-1.575-1.285 0-1.209 1.568-1.209 1.575v.832z"
      }
    />
  );
};
