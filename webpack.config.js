const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    // mode: 'development',

    entry: path.resolve(__dirname, 'src/index.js'),

    output: {
        filename: 'web3.js',
        path: path.resolve(__dirname, './'),
        library: 'web3',
        libraryTarget: 'umd'
    },

    externals: [
        'react-native'
    ],

    resolve: {
        alias: {
            crypto: path.resolve(__dirname, 'src/crypto.js')
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: ['react-native']
                    }
                }
            }
        ]
    },

    plugins: [
        new webpack.IgnorePlugin(/ed25519/)
    ]
};
