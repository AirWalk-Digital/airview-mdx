module.exports = {
  stories: ['../src/**/*.stories.@(mdx|js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/preset-create-react-app'],
  framework: '@storybook/preset-create-react-app',
  core: {
    builder: {
      name: '@storybook/builder-webpack5',
      options: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },};