import { Transform, pipeline } from "stream";

const transform = async () => {
  const transformString = new Transform({
    transform(chunk, encoding, callback) {
      const transformChunk = chunk.toString().split("").reverse().join("");
      this.push(transformChunk);
      callback();
    },
  });
  pipeline(process.stdin, transformString, process.stdout, (err) => {
    throw new Error(err);
  });
  console.log("Write smth: \n");
};

await transform();
