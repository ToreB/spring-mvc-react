var path = require('path');

module.exports = {
    entry:{
        index: './src/main/js/index.js'
    },
    devtool: 'source-map',
    cache: true,
    mode: 'development',
    output: {
        path: path.join(__dirname, './target/classes/static/built'),
        filename: '[name].bundle.js',
        library: 'lib'
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            }
        ]
    }
};