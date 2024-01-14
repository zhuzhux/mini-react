let taskId = 0;
function workLoop(deadline) {
  taskId++;
  let shouldYield = false;
  while (!shouldYield) {
    shouldYield = deadline.timeRemaining() < 1;
    console.log("[ taskId ]", taskId);
  }
  requestIdleCallback(workLoop);
}

requestIdleCallback(workLoop);
