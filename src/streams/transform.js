import { Transform, pipeline } from "stream";

const transform = async () => {
    const string = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, String(chunk).split("").reverse().join(""));
        }
    });
    pipeline(process.stdin, string, process.stdout, (err) => {
        throw new Error(err);
    });
    console.log("Write some text \n");
};

await transform();
