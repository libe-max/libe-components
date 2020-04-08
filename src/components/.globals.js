const env = process.env.NODE_ENV

const currentProtocol = typeof window !== 'undefined' ? window.location.protocol : 'http:'
const currentHostname = typeof window !== 'undefined' ? window.location.hostname : 'localhost'

const devStaticsRootUrl = `${currentProtocol}//${currentHostname}:3003`
const prodStaticsRootUrl = 'https://www.liberation.fr/apps/static'
const staticsRootUrl = env === 'production'
  ? prodStaticsRootUrl
  : devStaticsRootUrl

const devApiRootUrl = `${currentProtocol}//${currentHostname}:3004/api`
const prodApiRootUrl = 'https://libe-labo-2.site/api'
const apiRootUrl = env === 'production'
  ? prodApiRootUrl
  : devApiRootUrl

const devProxyRootUrl = `${currentProtocol}//${currentHostname}:3004/proxy`
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
