const path = require('path');

// module.exports = {
//     resolve: {
//         alias: {
//             '@': path.resolve('resources/js'),
//         },
//     },
// };

module.exports = {
    devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',
    //output: {
    //  chunkFilename: 'js/[name].js?id=[chunkhash]',
    //},
    
    resolve: {
      alias: {
        '@': path.resolve('./resources/js'),
        '~': path.resolve('./'),
      },
      extensions: ['.js', '.vue', '.json', '.ts'],
      modules: [
        'node_modules', 
        path.resolve(__dirname, 'resources/js')
      ],
    },
    module: {
        rules: [
          {
            test: /\.ts$/,
            loader: "ts-loader",
            exclude: /node_modules|vue\/src/,
            options: {
              appendTsSuffixTo: [/\.vue$/]
            }
          },
          {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
              esModule: true
            }
          }
        ],
        
    }
  };