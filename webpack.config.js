const HtmlWebpackPlugin  = require('html-webpack-plugin');
const webpack = require('webpack');

let HWPConfig = new HtmlWebpackPlugin({
    template: __dirname + "/src/index.html",
    file: "index.html",
    inject: "body"
});

/*
 * When creating new page, add its filename to 'pages' array here.
 *
 * It's assumed that all pages are inside 'views/pages' directory. 
 */
let pages = [
  'about',
  'contacts',
  'faq',
];

let entryHtmlPlugins = pages.map(function (entryName) {
    return new HtmlWebpackPlugin({
        filename: entryName + '.html',
        template: __dirname + `/src/views/pages/${entryName}.html`
    })
});

let config = {
  context: __dirname + '/src',
  entry: {
    app: './assets/js/main.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  plugins: [
    HWPConfig
  ].concat(entryHtmlPlugins),
  module: {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader','css-loader']
        },
        {
            test: /\.html$/,
            use: {
                loader: 'html-loader',
                options: {
                    interpolate: true
                }
            }
        },
    ]
  }
};

module.exports = config;