import { ComponentProps, ReactNode } from 'react'
import {
  TooltipArrow,
  TooltipContainer,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
} from './styles'
import { Text } from '../Text'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  title: string
  offset: number
  children: ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
}

export const Tooltip = ({
  title,
  side,
  offset = 5,
  children,
}: TooltipProps) => {
  return (
    <TooltipProvider>
      <TooltipContainer>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent sideOffset={offset} side={side}>
            <Text size="sm">{title}</Text>
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipContainer>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'
