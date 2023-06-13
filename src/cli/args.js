const parseArgs = () => {
  const userInputArgs = process.argv.slice(2);
  const cliArgs = userInputArgs.reduce((acc, arg, i, arr) => {
    const probableValue = arr[i + 1];
    if (probableValue && arg.startsWith("--")) {
      const modifiedArgs = arg.slice(2);
      const modifiedCliArgs = `${modifiedArgs} is ${probableValue}`;
      acc.push(modifiedCliArgs);
    }
    return acc;
  }, []);

  console.log(cliArgs.join(", "));
};

parseArgs();
