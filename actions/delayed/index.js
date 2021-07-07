const core = require('@actions/core');

const shouldFail = core.getInput('shouldFail')
const name = core.getInput('name')

core.info('starting timer');
const start = Date.now()
setTimeout(() => {
  core.info(JSON.stringify({name}));
  core.info('timer is over: ' + (Date.now() - start));
  core.setOutput('res', name + '_' + start);
  if(shouldFail == 'true') {
    core.setFailed('failed');
  }
}, 30000)
