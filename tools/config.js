import fs from 'fs'
const dirname = __dirname + '/..'
const ctx = {
  env: process.env.NODE_ENV,
  debug: !process.argv.includes('--release'),
  verbose: process.argv.includes('--verbose'),
  dirname,
  pkg: require('../package.json'),
  deps: [
  ],
}
export default ctx
