import { useId } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'
import { useArgs } from 'storybook/preview-api'
import { fn } from 'storybook/test'

import Button from '../Button/Button'

import type { ModalProps } from './Modal.types'
import Modal from './Modal'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Компоненты/Modal',
  component: Modal,
  args: { open: false, isEsc: true, onClose: fn() },
  render: function Dialog(args) {
    const headingId = useId()
    const [{ open }, updateArgs] = useArgs<ModalProps>()
    const close = () => {
      updateArgs({ open: false })
      args.onClose?.()
    }
    return (
      <>
        <Button
          onClick={() => updateArgs({ open: true })}
          variant="contained"
          color="primary">
          Открыть окно
        </Button>
        <Styled.Backdrop
          as={Modal}
          {...args}
          open={open}
          onClose={close}
          role="dialog"
          aria-modal="true"
          aria-labelledby={headingId}>
          <Styled.Panel>
            <Styled.Stack>
              <h2 id={headingId}>Сохранить изменения?</h2>
              <Styled.Hint>
                Окно закрывается кнопкой или нажатием на фон
                {args.isEsc && ', а также клавишей Escape'}.
              </Styled.Hint>
              <Styled.Row>
                <Button variant="contained" color="primary" onClick={close}>
                  Сохранить
                </Button>
                <Button onClick={close}>Отмена</Button>
              </Styled.Row>
            </Styled.Stack>
          </Styled.Panel>
        </Styled.Backdrop>
      </>
    )
  }
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Диалог' }
export const WithoutEscape: Story = {
  name: 'Без закрытия по Escape',
  args: { isEsc: false }
}
