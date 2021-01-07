const gooberPlugin = require('preact-cli-goober-ssr')

export default (config, env, helpers) => {
  config.resolve.modules.push(env.src)
  gooberPlugin(config, env)
  if (!env.dev) {
    config.devtool = 'none'
    const { index, rule } = helpers.getRulesByMatchingFile(config, '.svg')[0]
    rule.test = /\.(woff2?|ttf|eot|jpe?g|png|webp|gif|mp4|mov|ogg|webm)(\?.*)?$/i
    config.module.rules.splice(index, 0, {
      test: /\.(svg|png)(\?.*)?$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 2000,
          },
        },
      ],
    })
  }
}
