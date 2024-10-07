import { getPath } from "../getPath.js";
import { readFile } from "node:fs/promises";

const calculateHash = async () => {
  const fileToHash = getPath(
    import.meta.url,
    "files",
    "fileToCalculateHashFor.txt"
  );
  try {
    const file = await readFile(fileToHash);
    const { createHash } = await import("node:crypto");
    const hash = createHash("sha256");
    hash.update(file);
    console.log(hash.digest("hex"));
  } catch (err) {
    throw new Error(err);
  }
};

await calculateHash();
