import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@orion_ui/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    title: 'Scheduling done',
    altText: 'Close',
    open: true,
    children: ' Wednesday, October 23rd at 4pm',
  },
  argTypes: {},
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
