var path = require('path');
var webpack = require('webpack');
var assetsPath = path.join(__dirname);
const ver = 1;





module.exports = {
    entry :  {
        bundle : assetsPath +'/src/index.js',
    },
    output: {
        chunkFilename: '[name].js',
        filename: '[name].js', //
        path: assetsPath+'/dist'
    },
    module: {
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /.jsx?$/,
                loaders: ['babel'],
                include: [path.resolve(assetsPath+"/src")],

           }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool : 'eval',

    plugins: [
     new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false
        },
        compress: {
            drop_console: true
        }
    }),
  ]

};
