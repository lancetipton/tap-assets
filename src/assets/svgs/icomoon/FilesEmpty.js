import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const FilesEmpty = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M14.341 5.579c-.347-.473-.831-1.027-1.362-1.558s-1.085-1.015-1.558-1.362C10.615 2.068 10.224 2 10 2H4.25C3.561 2 3 2.561 3 3.25v11.5c0 .689.561 1.25 1.25 1.25h9.5c.689 0 1.25-.561 1.25-1.25V7c0-.224-.068-.615-.659-1.421zm-2.07-.85c.48.48.856.912 1.134 1.271h-2.406V3.595c.359.278.792.654 1.271 1.134zM14 14.75c0 .136-.114.25-.25.25h-9.5a.253.253 0 01-.25-.25V3.25c0-.135.114-.25.25-.25H10v3.5a.5.5 0 00.5.5H14v7.75z"
      }
    />
  );
};
