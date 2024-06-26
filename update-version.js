const fs = require("fs");
const execSync = require("child_process").execSync;

const gitVersion = execSync("git rev-list --count HEAD").toString().trim();
const gitDiff = execSync("git diff --name-only HEAD").toString().trim();
const isDirty = gitDiff ? '1' : '0';
const commitHash = execSync("git rev-parse HEAD").toString().trim().substring(0,6);
const buildDate = new Date().toISOString();

const content = `
export const version = '1.0.${gitVersion}.${isDirty}';
export const buildDate = '${buildDate}';
export const commitHash = '${commitHash}';
`;

fs.writeFileSync("./src/environments/version.prod.ts", content);