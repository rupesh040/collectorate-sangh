const { copyFileSync, readdirSync } = require("node:fs");
const { join } = require("node:path");

function flattenSegments(directory, destination, parts) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const source = join(directory, entry.name);
    const segments = [...parts, entry.name];
    if (entry.isDirectory()) {
      flattenSegments(source, destination, segments);
    } else if (entry.isFile() && entry.name.endsWith(".txt")) {
      copyFileSync(source, join(destination, segments.join(".")));
    }
  }
}

function prepareDirectory(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name === "_next") continue;
    const source = join(directory, entry.name);
    if (entry.name.startsWith("__next.")) {
      flattenSegments(source, directory, [entry.name]);
    } else {
      prepareDirectory(source);
    }
  }
}

prepareDirectory(join(__dirname, "..", "dist"));
