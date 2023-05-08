import { useResultStore } from "src/stores/useResultStore";
import { useTaskProgress } from "src/stores/useTaskProgress";

const { loadTaskProgress } = useTaskProgress.getState();
const { loadResult } = useResultStore.getState();

loadTaskProgress();
loadResult();
