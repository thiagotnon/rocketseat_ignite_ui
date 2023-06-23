import type { StoryObj, Meta } from '@storybook/react'
import { Box, Toast, ToastProps } from '@orion_ui/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    title: 'Scheduling done',
    altText: 'Close',
    open: true,
    children: ' Wednesday, October 23rd at 4pm',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            background: 'transparent',
            border: '0',
            position: 'relative',
            height: 'calc(20vh - 20px)',
            transform: 'scale(1)',
            overflow: 'hidden',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
  argTypes: {},
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
