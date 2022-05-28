"use strict";

const path = require("path");

const rootDir = path.resolve(__dirname);
const publicDir = path.join(rootDir, "../public");
const uploadsDir = path.join(rootDir, "../uploads");

module.exports = { rootDir, publicDir, uploadsDir };
