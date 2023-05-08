import Router from "next/router";
import React, { useMemo, useState } from "react";
import { useCountDown } from "src/hooks/useCountDown";
import generator from "src/utils/generateMaze";
import { Button } from "./Button";

export const Box = ({
  baseWidth,
  bottom,
  top,
  left,
  right,
  active,
  exit,
  onClick,
}: {
  baseWidth: number;
  [x: string]: any;
}) => {
  return (
    <div
      onClick={active ? null : onClick}
      className="border cursor-pointer"
      style={{
        width: baseWidth * 11,
        height: baseWidth * 11,
        margin: -0.5,
        zIndex: 6,
        borderBottomColor: right ? "black" : "transparent",
        borderTopColor: left ? "black" : "transparent",
        borderLeftColor: top ? "black" : "transparent",
        borderRightColor: bottom ? "black" : "transparent",
      }}
    >
      {active ? (
        <img
          src="/images/bird.png"
          style={{
            margin: baseWidth * 1.5,
            width: baseWidth * 8,
            height: baseWidth * 8,
          }}
        />
      ) : null}
      {exit ? (
        <img
          src="/images/worm.png"
          style={{
            margin: baseWidth * 2,
            width: baseWidth * 7,
            height: baseWidth * 7,
          }}
        />
      ) : null}
    </div>
  );
};

interface props {
  grid: number;
  time: number;
  onSuccess: () => void;
  onError: () => void;
}

const widthTable: Record<number, number> = {
  3: 7,
  4: 6.5,
  5: 6,
};

export const GameScreen: React.FC<props> = ({
  grid,
  time,
  onSuccess,
  onError,
}) => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const { countDown } = useCountDown(time);

  if (countDown === 0) onError();

  const size = grid * grid - 1;
  const baseWidth =
    widthTable[grid] || Math.min(window.innerWidth, 420) / (grid * 12);

  const mazeMap: any[][] = useMemo(
    () => generator(grid, grid, true, Math.round(Math.random() * 100000)),
    [grid]
  );

  const onChange = (x: number, y: number) => {
    x += posX;
    y += posY;

    const pos = x * grid + y;

    if (pos === size) {
      onSuccess();
    }

    setPosX(x);
    setPosY(y);
  };

  return (
    <>
      <h4 className="mt-12 -mb-12 text-center">Time Left: {countDown}</h4>
      <div
        className="flex-wrap items-center flex-1 mx-auto f"
        style={{
          width: baseWidth * 11 * grid + 1.5 - 1 * grid,
          height: baseWidth * 11 * grid + 1.5 - 1 * grid,
        }}
      >
        {mazeMap.map((row, idx_x) => (
          <div key={idx_x}>
            {row.map((col, idx_y: number) => (
              <Box
                key={idx_y}
                active={idx_x === posX && idx_y === posY}
                onClick={() => {
                  if (
                    (posX !== idx_x || Math.abs(posY - idx_y) > 1) &&
                    (posY !== idx_y || Math.abs(posX - idx_x) > 1)
                  )
                    return;

                  if (posX === idx_x) {
                    if (posY < idx_y && !col.left) onChange(0, 1);
                    if (posY > idx_y && !col.right) onChange(0, -1);
                  }
                  if (posY === idx_y) {
                    if (posX < idx_x && !col.top) onChange(1, 0);
                    if (posX > idx_x && !col.bottom) onChange(-1, 0);
                  }
                }}
                baseWidth={baseWidth}
                exit={
                  idx_x * grid + idx_y === size &&
                  !(posX === idx_x && posY === idx_y)
                }
                {...col}
              />
            ))}
          </div>
        ))}
      </div>
      <Button
        btn="custom"
        className="py-3 mb-8 text-blue-500 bg-white border border-blue-500 rounded-lg w-80 hover:bg-blue-100"
        onClick={Router.reload}
        title="Reset"
      />
    </>
  );
};
