const { execSync } = require('child_process');

const delaySync = (delay) => execSync(`sleep ${delay}`);

const delayAsync = (delay) => new Promise((resolve, reject) => {
  setTimeout(resolve, delay)
});

console.log('Starting module loading delay');
delaySync(10)
console.log('End of module loading delay');

module.exports = {
  delaySync,
  delayAsync,
}
