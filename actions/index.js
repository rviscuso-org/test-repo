const core = require('@actions/core');

core.info('starting timer');
setTimeout(() => {
  core.info('timer is over');
  core.setOutput('res', body);
  core.setFailed(err);
}, 20000)
