const CracoAlias = require('craco-alias');

const path = require('path');
const enableImportsFromExternalPaths = require('./craco.helper.js');

// Paths to the code you want to use
const sharedLibOne = path.resolve(__dirname, '../src');
// const sharedLibTwo = path.resolve(__dirname, "../shared-lib-2/src");

module.exports = {
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          enableImportsFromExternalPaths(webpackConfig, [
            // Add the paths here
            sharedLibOne,
            // sharedLibTwo,
          ]);
          return webpackConfig;
        },
      },
    },
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: './',
        aliases: {
          react: '../node_modules/react',
          'react-dom': '../node_modules/react-dom',
        },
      },
    },
  ],
};
