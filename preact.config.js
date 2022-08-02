const gooberPlugin = require('preact-cli-goober-ssr')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

export default (config, env, helpers) => {
  config.resolve.modules.push(env.src)
  gooberPlugin(config, env)
  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '*',
          context: path.resolve(__dirname, 'src/assets'),
        },
      ],
    })
  )
  if (!env.dev) {
    if (!env.analyze) {
      config.devtool = 'none'
    }
    const { index, rule } = helpers.getRulesByMatchingFile(config, '.svg')[0]
    rule.test =
      /\.(woff2?|ttf|eot|jpe?g|png|webp|gif|mp4|mov|ogg|webm)(\?.*)?$/i
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
