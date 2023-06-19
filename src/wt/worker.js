import { workerData, parentPort } from "worker_threads";
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  console.log(workerData);
  parentPort.postMessage(nthFibonacci(workerData));
};

sendResult();
