const core = require('@actions/core');

const shouldFail = core.getInput('shouldFail')
const msg = core.getInput('msg')

core.info('starting timer');
const start = Date.now()
setTimeout(() => {
  core.info(JSON.stringify({msg}));
  core.info('timer is over: ' + (Date.now() - start));
  core.setOutput('res', msg + '_' + start);
  if(shouldFail == 'true') {
    core.setFailed('failed');
  }
}, 30000)
