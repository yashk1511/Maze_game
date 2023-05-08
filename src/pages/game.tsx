import React, { useCallback, useRef, useState } from "react";
import { Celebrations } from "src/components/Celebrations";
import { ChildProp, ComponentRefresh } from "src/components/ComponentRefresh";
import { GameScreen } from "src/components/GameScreen";
import { GameWrapper } from "src/components/GameWrapper";
import { ResultModal } from "src/components/ResultModal";
import { GameLevels } from "src/constants/GameLevel";
import { useResultStore } from "src/stores/useResultStore";
import { useTaskProgress } from "src/stores/useTaskProgress";

const Task5 = ComponentRefresh(({ onRefresh }: ChildProp) => {
  const {
    updateTaskProgress,
    progress: { currLevel, totalLevel },
  } = useTaskProgress((s) => s);

  if (currLevel === totalLevel) return <Celebrations />;

  const { time, grid } = GameLevels[currLevel];
  const start = useRef(new Date().getTime()).current;

  const [result, setResult] = useState<"success" | "error" | "">("");
  const { updateResult } = useResultStore();

  const taskComplete = () => {
    updateTaskProgress({ currLevel: currLevel + 1 });
    updateResult({
      [`level-${currLevel + 1}`]: {
        trail: currLevel + 1,
        time: (new Date().getTime() - start) / 1000,
      },
    });
  };

  return (
    <GameWrapper currLevel={currLevel} totalLevel={totalLevel}>
      <ResultModal
        result={result}
        onClick={useCallback(() => {
          if (result === "success") {
            taskComplete();
          }
          onRefresh();
        }, [result])}
      />
      <GameScreen
        key={currLevel}
        grid={grid}
        time={time}
        onSuccess={useCallback(() => {
          setResult("success");
        }, [])}
        onError={useCallback(() => {
          setResult((res) => {
            if (res === "") return "error";
            return res;
          });
        }, [])}
      />
    </GameWrapper>
  );
});

export default Task5;
