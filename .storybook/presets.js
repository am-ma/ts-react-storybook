const path = require('path');

module.exports = [
  {
    name: '@storybook/preset-typescript',
    options: {
      tsDocgenLoaderOptions: {
        tsconfigPath: path.resolve(
          __dirname,
          '../tsconfig.json'
        ),
      },
      include: [path.resolve(__dirname, '../src')],
    },
  },
  {
    name: '@storybook/addon-docs/react/preset',
    options: {
      configureJSX: true,
      babelOptions: {},
    },
  },
];
