import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const FloppyO = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 1792 1792"}
      delta={
        "M512 1536h768v-384H512v384zm896 0h128V640q0-14-10-38.5t-20-34.5l-281-281q-10-10-34-20t-39-10v416q0 40-28 68t-68 28H480q-40 0-68-28t-28-68V256H256v1280h128v-416q0-40 28-68t68-28h832q40 0 68 28t28 68v416zm-384-928V288q0-13-9.5-22.5T992 256H800q-13 0-22.5 9.5T768 288v320q0 13 9.5 22.5T800 640h192q13 0 22.5-9.5t9.5-22.5zm640 32v928q0 40-28 68t-68 28H224q-40 0-68-28t-28-68V224q0-40 28-68t68-28h928q40 0 88 20t76 48l280 280q28 28 48 76t20 88z"
      }
    />
  );
};
