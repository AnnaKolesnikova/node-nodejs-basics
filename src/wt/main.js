import { getPath } from "../getPath.js";
import { Worker } from "worker_threads";
import { cpus } from "os";

const performCalculations = async () => {
    const cp = cpus();
    let count = 10;

    const workerPath = getPath(import.meta.url, "", "./worker,js");
    const worker = await Promise.allSettled(
        cp.map(() => {
            return new Promise((resolve, reject) => {
                const newWorker = new Worker(workerPath, {
                    workerData: count++,
                })
                newWorker.on("message", (message) => resolve(message));
                newWorker.on("error", (message) => reject(message));
            })
        })
    );

    const results = worker.map(({status, value}) => ({
        status: status === "fulfilled" ? "resolved" : "error",
        data: status === "fulfilled" ? value : null,
    }));

    console.log(results);
    return results;
};

await performCalculations();
