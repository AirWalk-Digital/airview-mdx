module.exports = {
  stories: ['../src/*.stories.@(mdx|js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-actions', '@storybook/addon-links'],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            // presets: [['react-app', { flow: false, typescript: true }]],
          },
        },
        {
          loader: '@mdx-js/loader',
          options: {
            jsx: true
          },
        },
      ],
    });

    return config;
  },
};
