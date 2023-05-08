import React from "react";
import { Button } from "src/components/Button";
import { Header } from "src/components/Header";
import { useResultStore } from "src/stores/useResultStore";
import { useTaskProgress } from "src/stores/useTaskProgress";

const Result = () => {
  const { result, resetResult } = useResultStore();
  const { resetTaskProgress } = useTaskProgress();
  const levels = Object.keys(result);

  return (
    <>
      <Header title="Result" />
      <div className="h-screen p-2 pt-16 overflow-y-scroll bg-sky-300 scroll-hidden">
        <div className="max-w-sm p-5 mx-auto my-4 leading-7 whitespace-pre-line bg-white rounded-lg shadow-md w-90vw">
          <h4 className="mb-3">Maze game</h4>
          {levels.length
            ? levels.map((key, idx) => (
                <div key={idx}>
                  {key}: {JSON.stringify((result as any)[key])}
                </div>
              ))
            : "no result found"}
        </div>
        <Button
          title="Reset progress"
          onClick={() => {
            resetResult();
            resetTaskProgress();
          }}
          className="max-w-sm py-3 mx-auto my-6 rounded-lg w-90vw"
        />
      </div>
    </>
  );
};

Result.auth = true;

export default Result;
