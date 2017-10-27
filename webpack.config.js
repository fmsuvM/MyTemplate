const path = require('path');

module.exports = [{
    /* change file path */
    entry: path.join(__dirname, 'src/index.jsx'),
    output: {
        path: path.join(__dirname, 'app'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /.scss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'sass-loader'
            }]
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
    externals: [
        function(context, request, callback) {
            if(request === 'electron') {
                return callback(null, 'require(\'' + request + '\')');
            }
            return callback();
        }
    ]
}]
