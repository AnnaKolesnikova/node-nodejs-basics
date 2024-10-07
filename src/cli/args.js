const parseArgs = () => {
  const userArgs = process.argv.slice(2);

  const args = userArgs.reduce((acc, arg, i, arr) => {
    const nextValue = arr[i + 1];
    if (nextValue && arg.startsWith("--")) {
      const modifiedArg = arg.slice(2);
      const modifiedCliArgs = `${modifiedArg}=${nextValue}`;
      acc.push(modifiedCliArgs);
    }
    return acc;
  }, []);
  console.log(args.join("; "));
};

parseArgs();
