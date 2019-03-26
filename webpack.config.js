const path = require('path');

const conf = {
  entry: {
    main: ['./src/js/draw.js', './src/js/control.js'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  devServer: {
    publicPath: '/dist',
    contentBase: './src',
    hot: true,
    disableHostCheck: true,
    overlay: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
};

module.exports = (env, options) => {
  const production = options.mode === 'production';

  conf.devtool = production ? 'source-map' : 'eval-sourcemap';

  return conf;
};
