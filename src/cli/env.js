const parseEnv = () => {
  const rssEnvVars = Object.entries(process.env).reduce((acc, [key, value]) => {
    if (key.startsWith("RSS_")) acc.push(`${key}=${value}`);
    return acc;
  }, []);
  console.log(rssEnvVars.join("; "));
};

parseEnv();
