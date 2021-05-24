//Importing path utility as a simple object
const path = require('path')

//Importing CSS plugins as an array object
const postCSSPlugins = [
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'app')
    },
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader?url=false', {loader: 'postcss-loader', options: {postcssOptions: {plugins: postCSSPlugins}}}]
            }
        ]
    }
}