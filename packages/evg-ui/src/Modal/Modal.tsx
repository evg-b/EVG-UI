import { useEffect } from 'react'

import { createPortal } from 'react-dom'

import type { ModalProps } from './Modal.types'

import * as Styled from './Modal.styled'

// Это окно, которое блокирует работу пользователя с родительским приложением до тех пор, пока пользователь это окно не закроет.
// Подходит для создания диалогов и лайтбоксов.

const Modal = ({
  ref,
  className,
  children,
  component: Component = 'div',
  open = false,
  onClose,
  isEsc = true,
  ...otherProps
}: ModalProps) => {
  const Close = (e) => {
    if (e.target === e.currentTarget && open) {
      onClose && onClose()
    }
  }

  const CloseESC = (e) => {
    e.preventDefault()

    if (isEsc && 'Escape' === e.key && open) {
      onClose && onClose()
    }
  }

  useEffect(() => {
    window.addEventListener('keyup', CloseESC)
    return () => window.removeEventListener('keyup', CloseESC)
  })
  return open
    ? createPortal(
        <Styled.Root
          as={Component}
          ref={ref}
          onClick={Close}
          {...otherProps}
          className={className}>
          {children}
        </Styled.Root>,
        document.body
      )
    : null
}

Modal.displayName = 'ModalEVG'
export default Modal
