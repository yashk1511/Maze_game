import React from "react";

interface props {
  progress: number;
}

export const ProgressBar: React.FC<props> = ({ progress }) => {
  return (
    <div className="bg-gray-200 w-80 rounded-xl">
      <div
        className="h-3 bg-blue-500 duration-400 rounded-xl"
        style={{ width: progress + "%" }}
      />
    </div>
  );
};
