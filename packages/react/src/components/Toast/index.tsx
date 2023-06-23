import { ComponentProps, ReactNode } from 'react'
import {
  ToastAction,
  ToastContainer,
  ToastDescription,
  ToastProvider,
  ToastButton,
  ToastTitle,
  ToastViewport,
} from './styles'
import { Text } from '../Text'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  altText: string
  children: ReactNode
  open: boolean
  onClickClose: () => void
}
export const Toast = ({
  title,
  altText,
  children,
  open,
  onClickClose,
}: ToastProps) => {
  return (
    <ToastProvider swipeDirection="right">
      <ToastContainer open={open}>
        <ToastTitle>
          <Text>{title}</Text>
        </ToastTitle>
        <ToastDescription asChild>
          <Text as="p" size="sm">
            {children}
          </Text>
        </ToastDescription>
        <ToastAction asChild altText={altText}>
          <ToastButton onClick={onClickClose}>
            <X />
          </ToastButton>
        </ToastAction>
      </ToastContainer>
      <ToastViewport />
    </ToastProvider>
  )
}
