import Runner from 'lsk-build/Runner'
import getWebpackConfig from './getWebpackConfig'
import config from './config'

const ctx = config
ctx.webpackConfig = getWebpackConfig(ctx)
const app = new Runner(ctx)
if (process.argv.length > 2) {
  const method = process.argv[2]
  app[method]().catch(err => console.error(err.stack));
}
