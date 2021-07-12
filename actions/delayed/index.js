const core = require('@actions/core');

const delay = require('../../delay');

const shouldFail = core.getInput('shouldFail')
const msg = core.getInput('msg')
const delay = core.getInput('delay') || 15000

core.info('starting timer');
const start = Date.now()
setTimeout(() => {
  core.info(JSON.stringify({msg}));
  core.info('timer is over: ' + (Date.now() - start));
  core.setOutput('res', msg + '_' + start);
  if(shouldFail == 'true') {
    core.setFailed('failed');
  }
}, delay)
