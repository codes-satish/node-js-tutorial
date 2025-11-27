const os = require("os");
const platform = os.platform();
const arch = os.arch();
const userInfo = os.userInfo();
const cpuArchitecture = os.arch();
const freeMemory = os.freemem();

console.log({
  platform,
  arch,
  userInfo,
  cpuArchitecture,
  freeMemory,
});
