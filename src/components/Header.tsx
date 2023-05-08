import Router from "next/router";
import React from "react";
import { IconButton } from "src/components/IconButton";

interface props {
  title: string;
}

export const Header: React.FC<props> = ({ title }) => {
  return (
    <div className="absolute top-0 z-[100] w-full bg-blue-500 px-2 pt-0.5 text-xl text-white shadow-md c h-14">
      <IconButton
        icon="BackIcon"
        iconSize={20}
        className="absolute p-3 mr-4 rounded-full focus:ring-0 top-1.5 left-1.5 hover:bg-white hover:bg-opacity-20"
        onClick={() => Router.push("/")}
      />
      {title}
    </div>
  );
};
