import devConfig from "./config/webpack.config.dev.js";
import prodConfig from "./config/webpack.config.prod.js";

const environment = (process.env.NODE_ENV || "development").trim();

export default environment === "development" ? devConfig : prodConfig;
