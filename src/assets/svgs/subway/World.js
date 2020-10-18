import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgWorld = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 512 512"}
      delta={
        "M236.3 65.6c1.2 0 2.7.6 4 2.4-5.8-8.3 6.5-4.7 7.2-12.6 7-5.2 4.5-8.6 6.5-8.8l2.2-1.8c-4.3 1.6-5.8 1.9-7 1.9h-2c-1.5 0-4 .3-9.9 2.1-13.5 1-23.2 15.6-27.8 16-4.7 2.5-4.5 3-3.4 3 .3 0 .7-.1 1.1-.1.4 0 .7-.1 1-.1 1.1 0 .8.5-5.6 3.5 1.5.4-11.2 6-11.3 14.8-.4 3.4 1 5.7 3.3 5.7 2 0 4.5-1.5 7.2-5.3 9-10.4 28-11.4 36.2-17.7-5.1-.4-4.1-3-1.7-3zm-45.7 3.5c-.9 0 .3-1.1 1.6-2.2 1.4-1.1 3-2.2 3-2.2l-.1.1c5.4-2.1 2.1-2.6 5-4h-.2c-.6 0 .5-.8 1.5-1.7 1-.8 1.9-1.7 1-1.7-.5 0-1.8.3-4 1.2.7-1 3.4-1.7 7.2-3.8-5.5 1.8-9.8 2.9-10.3 2.9-.4 0 1.9-.8 8.8-2.9.3 0 .6.1.8.1.7 0 1-.2.9-.4-.1-.2-.5-.3-1.2-.3-9.9.8-17.3 7-15.1 7.8 1.3-.4 2.2-.6 2.8-.6 1.3 0 .7 1.1-1.9 2.7 1.2 2.8-20 10-22.4 12.6 1.2-.7 2-.9 2.4-.9 1.6 0-.5 3.1-2.6 4.6 1.3 1.2 2.3 1.6 3.1 1.6 2.1 0 3-2.9 4.8-3.8.4.8.8 1.2 1.3 1.2 1.7 0 3.8-4.2 5.5-6.4.5.5 1.1.9 1.9.9 1.6 0 4-1.3 7.8-5-.8.1-1.4.2-1.6.2zm-23 18.4c-3.6 2.2-5.5 3.1-6.3 3.1-1.5 0 .5-2.8 2.3-5.7 1.8-2.8 3.4-5.6 1.1-5.6-1.1 0-3.1.6-6.3 2.2-8.7 5.8-23.4 21.8-29.9 21.8h-.6c10.5-7.7 7.4-22.8 22.1-26.7 14.5-8.3 24.4-5.7 37.3-15.2-3.8 1.9-9.4 4-10.7 4-.8 0 .4-1 5.6-3.5-.5.1-.9.2-1.2.2-3.5 0 23-9.5 24.3-9.7-10.9 1.5-28.5 10.6-30.9 10.6-.3 0-.3-.1-.3-.3.4-.3.4-.5 0-.5-1.3 0-6.7 1.8-12.2 3.6-5.4 1.8-10.9 3.7-12.1 3.7-.4 0-.4-.2.2-.6-47.2 26.8-86.6 72-98.9 125.6 5.1 11.7 1.6 34 10 40.5 9.6 8.1-8.2 31.6-3.5 46.1 4.8 26.2 25.5 44.1 27.7 70.9 3.8 18.4 17.7 40.9 23.5 52.6 4.4 4.4 16.5 17.1 18.6 17.1.8 0 .3-1.9-2.9-7-2-5.7-13.6-20.6-8-20.6.3 0 .6 0 1 .1-6.9-7 15.3-5.1-.2-14.6-1.8-2.2-2.2-2.9-1.8-2.9.5 0 1.9.8 3.5 1.6 1.7.8 3.7 1.6 5.3 1.6 2.5 0 4.2-1.7 3.2-7.9.4.2.8.2 1.1.2 2.6 0 1.7-5.1 1.9-10.2.2-5.1 1.5-10.2 8.5-10.2.8 0 1.7.1 2.6.2 16.2-8.8 2.1-33.1 20.7-42-.7-20.2-27.8-21.2-38-29.4-1.7 1-3.3 1.3-4.9 1.3-1.8 0-3.4-.4-4.8-.9-1.4-.4-2.7-.9-3.6-.9-.2 0-.4 0-.6.1 17.4-4.6 4.7-28.8-9.7-28.8h-1c-1.1-10.5-6.5-6.5-7.1-15.2-.9.5-1.8.7-2.7.7-2.4 0-4.6-1.7-6.5-3.3-1.9-1.7-3.5-3.3-4.9-3.3-1.1 0-2.1 1.1-3 4.3 1-4.9.7-6.5-.3-6.5s-2.8 1.7-4.8 3.4c-1.9 1.7-4.1 3.4-5.8 3.4h-.5c-11.7-8.3.1-23-6.1-34.3 4-4.3 5.6-11.6 3.8-11.6-.9 0-2.7 1.8-5.5 6.7-4-10.2 6.6-33.3 15.6-34.6.3 0 .5-.1.8-.1 1.6 0 3.2.8 4.6 2.5.8 4.7-1.2 14.6-.4 14.6.4 0 1.2-2 3.2-7.2 2.6-11.9 20.8-20.5 22.7-27.8.1.1.1.1.2.1 2.1 0 15.6-11.9 21.5-13.2 2.3-2.3 3.9-3.1 5.1-3.1 1.3 0 2 1 2.5 1.9.5 1 .9 1.9 1.4 1.9.4 0 .9-.6 1.8-2.3-3.1-6.1 4.9-11.9 2.7-11.9-.8 0-3.2.8-8.1 2.8-.8.4-1.2.5-1.4.5-.6 0 1.8-1.6 5.3-3.2s7.9-3.2 11.6-3.2c1.8 0 3.4.4 4.6 1.4 15.5-3.7 7-8.8 7.8-8.8h.2c4.4-2.6 3.1-12.4 9.6-18.5zm-69.3 40.9c-.2 0 .7-1.3 3.7-5 6.2-4.6 11.2-7.7 5.5-10.7 2.5-1.1 4.9-2.4 7.2-3.8-.1 4.9-4.2 16.8-6.4 16.8-.5 0-1-.7-1.2-2.2 1.3-2.3 1.4-3.2.9-3.2-.8 0-3.1 2-5.3 4.1-2.2 1.9-4.2 4-4.4 4zm5.7 2.7c-2.7 0-2.2-1.7 6.1-3.4 3.6-.5.8-.3 5.1-1.3-4.2 3.4-8.9 4.7-11.2 4.7zM259.5 121c1.2-.2 2.1-.2 2.8-.2 2.9 0 1.6 1.2-.1 2.4-1.7 1.2-3.8 2.4-2.6 2.4.7 0 2.6-.4 6.5-1.5 19.7-1.4-7.7-18.1-3.3-23.7l-1.2-.4c-8.1 10.3 5.4 10.5-2.1 21zm-8.2.4c1.4 0 3.2-1.6 5.1-6.1 2.6-3.1 1.5-3.5-1.3-5-7.7 2-7 11.1-3.8 11.1zm69 31.7c-.3 0-.5.1-.7.2.8.2 1.6.4 2.4.4-.8-.4-1.3-.6-1.7-.6zM454.6 178c1.7 3.7 2.6 5.2 2.7 5.2.7 0-12.6-32.4-18.1-38.2-28.7-47.2-75.9-83.3-129.7-96.8h-.1c-1.4 0 .2.7 2.1 1.4 1.9.7 4.2 1.4 4.2 1.4s-1.5-.5-6.1-1.8c-5.1-1.5-10.3-2.6-15.6-3-.9.3 21.9 9.3 37.2 14-5.1-1.6-10.4-3-11.7-3-.9 0 0 .6 3.7 2.2-4.5-1.3-6.4-1.9-6.6-1.9-.3 0 6 2.1 11.9 4.2 6 2.1 11.7 4.2 10.1 4.2-.4 0-1.5-.2-3.2-.5 5.1 2.8 6.9 3.9 6.6 3.9-.5 0-6.8-3-13.3-6-6.4-3-12.9-6-13.8-6-.5 0 .8 1 5.2 3.6 6 2.6 12 5.2 10.3 5.2-.8 0-3.1-.5-7.6-1.8 10 5.1-7.1 3.1-1.3 10-3.2-3-4.5-4-4.8-4s.5 1.2 1.3 2.4 1.4 2.4.7 2.4h-.2c7 7.6-4.9.8 3.6 7.6-6.4-2.9-17.3-7.7-12.4-7.7 1.2 0 3.5.3 7.1 1.1-6.5-7.6-24.9-7.9-25.3-8.8-4.6.3-4.7 3.8-3.9 10.2-.1 10.1-10 10.3-8.7 16.1 0-.1.1-.1.1-.1.2 0 .3 2 .9 4.1.7 2 1.9 4.1 4.5 4.1 1.4 0 3.2-.6 5.4-2.1 3.1 5.6 5.9 7.6 8.1 7.6 3.3 0 5.3-4.5 5.1-8.6-3.6-2-8.3-18.6-3.1-18.6.8 0 1.8.4 3.1 1.3-8.1 19.9 32 6.6 9.3 15.7 5.1 6.7-3.2 6.4-.8 14.5-3.9 1.1-8.2 2.1-12 2.1-5.6 0-9.9-2.4-9.4-10.8-7 3.7 7 16.2-6.9 16.2h-.8c-6.7 12.3-31.8 8.1-12.1 21.1 1.1 5.7-2.5 6.7-7.1 6.7-1.2 0-2.5-.1-3.8-.2-1.3-.1-2.6-.1-3.8-.1-5.2 0-8.9 1.3-5.7 9.4-2.3 8.4 3.1 12.1 9.7 12.1 8 0 17.8-5.2 18.5-13.8 4.3-6.5 9.8-9.2 15.5-9.2 9 0 18.5 6.8 24.7 15.2.5.8.9 1.1 1.1 1.1.5 0 0-2-.2-4-.2-1.6-.2-3.2.4-3.7-8.9-2.5-15.7-13.3-12.7-13.3 1 0 3.1 1.2 6.5 4.4h.5c5.6 0 10 4.4 13.4 8.8 3.5 4.4 6.1 8.8 8.4 8.8.9 0 1.8-.8 2.6-2.6-.4-.6-1.4-2.3-1.9-4-.6-2.1-.6-4.2 2.1-4.2 1.1 0 2.6.4 4.7 1.2 6.8-1.8-4.3-19.5 4.7-19.5.9 0 2 .2 3.4.6-.1 3.1 1.3 4.2 2.6 4.2 2.6 0 5.2-3.7-1.1-4.8 2.4-2.3 3.8-3.2 4.8-3.2 3.5 0 .7 11.6 12.8 11.6 4.1 9.7-35.6.7-22.9 19.3 2.9 2.1 6.5 2.5 10 2.5 1.1 0 2.1 0 3.1-.1 1 0 2-.1 2.9-.1 6.2 0 10.6 1.5 7.9 14.3-3.3 2.4-7 3.2-10.8 3.2-3.4 0-6.8-.6-10.1-1.2s-6.5-1.2-9.4-1.2c-4.5 0-8.1 1.5-10.3 6.7-11.7-4.8-27.1-5-25.6-19.5-20.4 2.9-41.7 1.4-56.7 13.9-.9 18.3-32.3 24.2-24.7 45-9.1 19.2 11 46.1 31.5 46.1.7 0 1.5 0 2.2-.1 11.2-.1 22.5-5.1 32.4-5.1 5.1 0 9.7 1.3 13.7 5.3.9-.1 1.7-.2 2.4-.2 15.3 0-4.9 24.3 13.4 28.4 16.6 17.2-10.2 34.9 2.9 51.4 1.4 12.9 7.8 23.7 7.8 36.3 1.7.2 3.3.3 5 .3 21.1 0 34.3-18.4 46.7-32.3-3.8-20.8 29.5-24.9 18.1-48.2-5.3-25.5 25.1-40.6 23.4-66.1.3-3.6-.7-4.7-2.2-4.7-1.5 0-3.7 1.1-5.8 2.1-2.2 1.1-4.6 2.1-6.5 2.1-2.5 0-4.4-1.7-4.6-7.3-14.7-13.7-21.4-32.3-35.1-47.4 17.8 8.6 27.9 28 36.1 45.6.7.2 1.4.3 2.2.3 14.5 0 34.7-34.7 12.7-43.1-1.2 3.3-2.8 4.5-4.7 4.5-3.3 0-7.1-4-9.8-7.9-2.7-4-4.1-8-2.6-8 1 0 3.2 1.6 7 5.8 4.3 2.7 8.5 3.4 12.9 3.4 4.3 0 8.7-.7 13.3-1.1 5.8 2.3 8.3 9.7 10.1 9.7.3 0 .7-.3 1-1 4.6 11 9.9 30.6 14.7 35.9-2.5-16.8-3.1-34.6-7.4-51.1zm-55.8-23.1c-11.3-2.9-15-16.9-23.9-25-.1-2.2 3.2-1.8 2.4-5.5 12 3.7 8.1 7.4 7 8.1 4.4 7.3 16.7 12.3 14.5 22.4zM243.5 78.8c-10.9 3.2-12.4-.3-10.5 6.4.8.6 2.3.8 3.8.8 5.3.1 12.5-3 6.7-7.2zm160.1 275.5c14.3-12.1 16.1-26.5 16.8-41.1-6.4 12.5-25.4 26.3-16.8 41.1zm-65.1-195c-.1.1-.1.1-.1.2.1.2.2.2.2.2s0-.1-.1-.4zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 492.3C125.5 492.3 19.7 386.5 19.7 256S125.5 19.7 256 19.7 492.3 125.5 492.3 256 386.5 492.3 256 492.3z"
      }
    />
  );
};
