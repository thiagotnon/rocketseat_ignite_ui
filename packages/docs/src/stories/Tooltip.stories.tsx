import type { StoryObj, Meta } from '@storybook/react'
import { Box, Button, Tooltip, TooltipProps } from '@orion_ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    title: '21 de Outubro - Indisponível',
    offset: 5,
    side: 'top',
    children: (
      <Button variant="secondary" size="sm">
        Button
      </Button>
    ),
  },
  decorators: [
    (Story) => {
      return (
        <Box css={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
          {Story()}
        </Box>
      )
    },
  ],
  argTypes: {
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
