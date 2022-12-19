import path from "path";

require("dotenv").config({path: path.resolve(getEnv(process.env.NODE_ENV))})

function getEnv(env) {
  switch (env?.toUpperCase()) {
    case "PRP":
      return '.env.prp';
    case "DEV":
      return ".env";
    default:
      return '.env';
  }
}
const data = {
  browser: process.env.BROWSER,
  mode: process.env.NODE_ENV === "PRP" ? "prp" : "dev",
}

export {data};


