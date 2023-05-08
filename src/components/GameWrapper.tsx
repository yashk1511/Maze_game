import React from "react";
import { ProgressBar } from "./ProgressBar";

export const GameWrapper: React.FC<{
  children: React.ReactNode;
  countDown?: number;
  currLevel: number;
  totalLevel: number;
}> = ({ children, currLevel, totalLevel, countDown }) => {
  return (
    <div className="items-center h-screen pt-6 flex-c">
      <div className="flex justify-between mb-3 font-semibold w-80">
        <text>Progress</text>
        <text>
          {currLevel}/{totalLevel}
        </text>
      </div>
      <ProgressBar progress={(currLevel * 100) / totalLevel} />
      {children}
    </div>
  );
};
