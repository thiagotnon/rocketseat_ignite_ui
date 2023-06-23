/** @type { import('@storybook/react').Preview } */
import theme from "./theme"
import{themes} from "@storybook/theming"
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: '@orion_ui',
      values: [
        {
          name: '@orion_ui',
          value: '#121214',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs:{
      theme,
      docsMode: 'tag'
    }
  },
};

export default preview;
