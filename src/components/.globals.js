const env = process.env.NODE_ENV

const devStaticsRootUrl = 'http://localhost:3003'
const prodStaticsRootUrl = 'https://www.liberation.fr/apps/static'
const staticsRootUrl = env === 'production'
  ? prodStaticsRootUrl
  : devStaticsRootUrl

const devApiRootUrl = 'http://localhost:3004/api'
const prodApiRootUrl = 'https://libe-labo-2.site/api'
const apiRootUrl = env === 'production'
  ? prodApiRootUrl
  : devApiRootUrl

const devProxyRootUrl = 'http://localhost:3004/proxy'
const prodProxyRootUrl = 'https://libe-labo-2.site/proxy'
const proxyRootUrl = env === 'production'
  ? prodProxyRootUrl
  : devProxyRootUrl

export {
  env,
  devStaticsRootUrl,
  prodStaticsRootUrl,
  staticsRootUrl,
  devApiRootUrl,
  prodApiRootUrl,
  apiRootUrl,
  devProxyRootUrl,
  prodProxyRootUrl,
  proxyRootUrl
}
