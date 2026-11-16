import type { Meta, StoryObj } from '@storybook/react-vite'
import { useArgs } from 'storybook/preview-api'

import List from '../List/List'

import type { SelectOptionProps } from './SelectOption.types'
import SelectOption from './SelectOption'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Компоненты/SelectOption',
  component: SelectOption,
  args: {
    value: 'frontend',
    children: 'Frontend',
    active: false,
    color: 'primary'
  },
  render: function ToggleOption(args) {
    const [{ active }, updateArgs] = useArgs<SelectOptionProps>()
    return (
      <Styled.Panel>
        <List>
          <SelectOption
            {...args}
            active={active}
            onClick={(event) => {
              updateArgs({ active: !active })
              args.onClick?.(event)
            }}
          />
        </List>
      </Styled.Panel>
    )
  }
} satisfies Meta<typeof SelectOption>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Выбор пункта' }
export const Active: Story = { name: 'Выбран', args: { active: true } }
