/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/pages/**/*.mdx", "../src/stories/**/*.stories.tsx"],
  addons: [
    "@storybook/addons",
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y'
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core:{
    builder: "@storybook/builder-vite"
  },
  docs: {
    autodocs: true,
  },
};
export default config;
