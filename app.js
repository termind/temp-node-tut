// npm  - global command; comes with Node
// npm  --version

// Local dependency - use it only in this particular project
// npm install <package name>

// Global dependency - use it on any project
// npm install -g <package name>

// package.json - manifest file (stores important information about a project/package)
// Manual approach (create package.json in the root, create properties, etc.)
// npm init (step-by-step, press enter to skip)
// npm init -y (uses defaults)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(items);
console.log(newItems);
