const env = process.env.NODE_ENV
const devStaticsRootUrl = 'http://localhost:3003'
const prodStaticsRootUrl = 'https://www.liberation.fr/apps/static'
const staticsRootUrl = env === 'production'
  ? prodStaticsRootUrl
  : devStaticsRootUrl

export {
  env,
  devStaticsRootUrl,
  prodStaticsRootUrl,
  staticsRootUrl
}
