import Lottie from "lottie-react";
import React, { memo } from "react";
import { Button } from "./Button";
import { Modal } from "./Modal";
import gameComplete from "public/lottie/game-complete.json";
import gameOver from "public/lottie/game-over.json";

interface props {
  result: "success" | "error" | "";
  onClick: () => void;
}

export const ResultModal: React.FC<props> = memo(({ result = "", onClick }) => {
  const success = result === "success";

  return (
    <Modal open={result !== ""}>
      <div className="justify-between overflow-hidden bg-white flex-c h-72 w-72 rounded-2xl">
        <Lottie
          autoPlay
          className="mx-auto mt-5 h-36 w-36"
          animationData={success ? gameComplete : gameOver}
        />
        <h4
          className={`text-center align-middle items-center ${
            success ? "text-emerald-500" : "text-red-500"
          }`}
        >
          {success ? "Task Completed" : "Task Failed"}
        </h4>
        <Button
          btn="custom"
          className="h-[60px] border-t text-blue-500 bg-gray-100 border-gray-400 hover:bg-blue-100"
          title={success ? "Next" : "Play Again"}
          onClick={onClick}
        />
      </div>
    </Modal>
  );
});
