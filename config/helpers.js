import path from "path";
const _root = path.resolve(new URL(".", import.meta.url).pathname, "..");

function root(...args) {
  return path.join(_root, ...args);
}

export { root };
