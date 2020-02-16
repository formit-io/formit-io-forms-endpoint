const CopyWebpackPlugin = require('copy-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = {
  entry: {
    index: './src/handlers/lambda.ts'
  },
  externals: [nodeExternals()],
  mode: 'development',
  target: 'node',
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: [path.resolve(__dirname, '__tests__'), /node_modules/]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'package.json',
        to: 'package.json'
      },
      {
        from: 'yarn.lock',
        to: 'yarn.lock'
      }
    ])
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    libraryTarget: 'commonjs',
    filename: 'bundle.js'
  }
}
