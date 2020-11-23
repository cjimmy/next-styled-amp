/**
 * raw-loader included to import css into pages/_document.js for AMP to work
*/
module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.css$/,
        use: 'raw-loader'
      }
    )
    return config
  },
}