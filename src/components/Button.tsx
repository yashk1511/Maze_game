import React from "react";
import * as Icons from "../icons";
import { Spinner } from "./Spinner";

const ButtonType = {
  default: "bg-blue-600 hover:bg-blue-500 text-white py-2 font-medium w-full",
  success:
    "bg-emerald-500 hover:bg-emerald-400 text-white py-2 font-medium w-full",
  danger: "bg-red-500 hover:bg-red-600 text-white py-2 font-medium w-full",
  custom: "",
};

interface props {
  loading?: boolean;
  disabled?: boolean;
  btn?: keyof typeof ButtonType;
  iconSize?: number;
  icon?: keyof typeof Icons;
}

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & props
> = ({
  title,
  loading,
  btn = "default",
  icon,
  iconSize,
  className,
  ...props
}) => {
  return (
    <button className={`c ${ButtonType[btn]} ${className}`} {...props}>
      {icon && !loading
        ? Icons[icon]({ size: iconSize, className: "mr-3" })
        : null}
      {loading ? <Spinner /> : title}
    </button>
  );
};
