const path = require('path')

module.exports = {
    mode: "development",
    entry: "./src/index",
    output: {
        fliename: 'js/[nmae]-[hash:8].js',
        path: path.resolve(__dirname, "dist"),
        publicPath:"/"
    }
}
