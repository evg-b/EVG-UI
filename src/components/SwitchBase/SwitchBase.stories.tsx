import { useId } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'
import { useArgs } from 'storybook/preview-api'
import { fn } from 'storybook/test'

import Icon from '../Icon/Icon'

import type { SwitchBaseProps } from './SwitchBase.types'
import SwitchBase from './SwitchBase'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Компоненты/SwitchBase',
  component: SwitchBase,
  args: { checked: false, type: 'checkbox', color: 'primary', onChange: fn() },
  argTypes: {
    color: { control: 'text' },
    icon: { control: false },
    iconChecked: { control: false }
  },
  render: function Controlled(args) {
    const id = useId()
    const [{ checked }, updateArgs] = useArgs<SwitchBaseProps>()
    return (
      <Styled.Row>
        <SwitchBase
          {...args}
          id={id}
          checked={checked}
          icon={<Icon name={checked ? 'Favorite' : 'FavoriteBorder'} />}
          onChange={(event) => {
            updateArgs({ checked: event.currentTarget.checked })
            args.onChange?.(event)
          }}
        />
        <Styled.Label htmlFor={id}>
          Собственная иконка переключателя
        </Styled.Label>
      </Styled.Row>
    )
  }
} satisfies Meta<typeof SwitchBase>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Собственный переключатель' }
export const Disabled: Story = { name: 'Недоступен', args: { disabled: true } }
