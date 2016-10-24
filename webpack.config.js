var path = require('path');
var webpack = require('webpack');
var assetsPath = path.join(__dirname);
const ver = 1;


module.exports = {
    entry :  {
        bundle :  ['webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
            'webpack/hot/only-dev-server',
           path.resolve(assetsPath,'./src/index.js')],\
    },
    output: {
        chunkFilename: '[name].js',
        filename: '[name].js?ver='+ver, //
        path: path.join(__dirname, assetsPath ,"dist/js/"),
        publicPath: 'http://localhost:8080/assets/'
    },
    module: {
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /.jsx?$/,
                loaders: ['babel'],
                include: [path.resolve(assetsPath+'/src')]

           }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool : 'source-map',

    plugins: [
     new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    }),
    ]

};
