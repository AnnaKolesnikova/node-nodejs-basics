import { dirname, join } from "path";
import { fileURLToPath } from "url";

export const getPathFromFiles = (url, foldername, filename) => {
  const __filename = fileURLToPath(url);
  const __dirname = dirname(__filename);
  const fileOrFolderPath = join(__dirname, foldername, filename);
  return fileOrFolderPath;
};
