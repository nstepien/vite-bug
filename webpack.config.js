import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default {
  mode: 'production',
  entry: './main.js',
  plugins: [
    new MiniCssExtractPlugin()
  ],
  cache: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          '@linaria/webpack5-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  }
}
