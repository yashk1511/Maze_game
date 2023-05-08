import Router from "next/router";
import { Button } from "src/components/Button";

const color = "#31C48D";
export default function TaskInstructionPage() {
  return (
    <div className="h-screen pt-6 overflow-y-scroll flex-c scroll-hidden">
      <img
        alt="task instruction image"
        src="/images/logo.jpg"
        className="h-64 max-w-sm mx-auto mb-4 bg-gray-200 w-90vw rounded-xl"
      />
      <div
        style={{ color: color }}
        className="mx-auto max-w-sm w-90vw font-semibold text-[22px]"
      >
        Maze
      </div>
      <h5 className="max-w-sm mx-auto mb-2 text-lg w-90vw">Instructions</h5>
      <p className="flex-1 max-w-sm mx-auto mb-2 text-gray-800 whitespace-pre-line w-90vw">
        You will see a maze displayed.
        <br />
        <br />
        Make the Bird eat the Worm as fast as possible. Tap on the immediate
        right or immediate left to make the bird move. Be as fast as possible.
        <br />
        <br />
        You can click on the “Reset” button at any time to reset this task.
      </p>
      <Button
        title="Play"
        onClick={() => Router.push("game")}
        className="max-w-sm mx-auto py-2.5 my-4 border rounded-lg w-90vw hover:brightness-110"
        style={{ backgroundColor: color, borderColor: color }}
      />
      <Button
        title="View result"
        btn="custom"
        onClick={() => Router.push("result")}
        className="max-w-sm py-2.5 mx-auto mb-4 border rounded-lg hover_effect c w-90vw "
        style={
          {
            borderColor: color,
            color: color,
            "--bg-color": color + "11",
          } as any
        }
      />
    </div>
  );
}
