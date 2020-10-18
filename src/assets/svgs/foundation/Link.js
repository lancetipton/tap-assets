import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgLink = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 100 100"}
      delta={
        "M78.663 21.338c-7.552-7.552-19.648-7.79-27.486-.713l-.019-.019L41.06 30.703a19.887 19.887 0 00-4.187 6.176 19.83 19.83 0 00-5.419 3.468l-.019-.019-10.097 10.097c-7.797 7.797-7.797 20.439 0 28.237 7.797 7.798 20.439 7.798 28.237 0l10.098-10.098-.019-.019a19.825 19.825 0 003.467-5.419 19.887 19.887 0 006.176-4.187l10.098-10.098-.019-.019c7.076-7.837 6.838-19.933-.713-27.484zM42.761 71.487l-.001.001c-3.935 3.935-10.314 3.935-14.248 0-3.935-3.935-3.935-10.314 0-14.248l.001-.001 7.367-7.367a19.847 19.847 0 005.18 9.068 19.85 19.85 0 009.067 5.181l-7.366 7.366zm5.473-19.721a10.024 10.024 0 01-2.919-6.452 10.027 10.027 0 016.452 2.919 10.02 10.02 0 012.919 6.452 10.03 10.03 0 01-6.452-2.919zm23.875-9.627l-.619.619-.001.001h-.001l-7.369 7.369a19.845 19.845 0 00-5.179-9.068 19.85 19.85 0 00-9.069-5.18l7.369-7.369.001-.001.001-.001.619-.619.029.028c3.959-3.329 9.874-3.134 13.6.591s3.921 9.642.591 13.6l.028.03z"
      }
    />
  );
};
