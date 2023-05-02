import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ['../src/stories/assets'],
  
  webpackFinal: async (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "os": false
    };
    // config.output.publicPath = '/airview-mdx/';
    return config;
  }
};
export default config;
