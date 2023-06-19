import { getPathFromFiles } from "../getPath.js";
import { spawn } from "child_process";

const spawnChildProcess = async (args) => {
  const scriptPath = getPathFromFiles(import.meta.url, "files", "script.js");
  const child = spawn("node", [scriptPath, ...args.split(" ")]);

  process.stdin.on("data", (data) => {
    child.stdin.write(data);
  });

  child.stdout.on("data", (data) => {
    console.log(`stdout:\n${data}`);
  });
};

spawnChildProcess("--silent --all");
