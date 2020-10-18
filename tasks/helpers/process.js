const { spawnCmd } = require('@keg-hub/spawn-cmd')
const { isArr } = require('@keg-hub/jsutils')
const { tapRoot } = require('./tapRoot')

const ensureArray = data => isArr(data) ? data : data.split(' ')

const runCmd = (cmd, args, config={}) => {
  try {
    return spawnCmd(cmd, {
      ...config,
      args,
      options: { ...config.options, env: { ...process.env, ...config.env } },
      cwd: tapRoot
    })
  }
  catch(err){
    console.error(err.message)
  }
}

const yarn = (args, ...opts) => runCmd(`yarn`, ensureArray(args), ...opts)
const npx = (args, ...opts) => runCmd(`npx`, ensureArray(args), ...opts)

module.exports = {
  npx,
  runCmd,
  yarn,
  spawnCmd
}