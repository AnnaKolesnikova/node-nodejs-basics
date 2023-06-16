import { Transform, pipeline } from "stream";

const transform = async () => {
  const reverseString = new Transform({
    transform(chunk, encoding, callback) {
      const stringToReverse = String(chunk);
      callback(null, stringToReverse.split("").reverse().join(""));
    },
  });
  pipeline(process.stdin, reverseString, process.stdout, (err) => {
    throw new Error(err);
  });
  console.log("Write some text \n");
};

await transform();
