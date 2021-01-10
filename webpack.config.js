const path = require("path")

module.exports = {
    devServer: {
        historyApiFallback: true // The make the react router api work
    },
    entry: path.resolve(__dirname, "./src/App.js"),
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader"
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    }
}