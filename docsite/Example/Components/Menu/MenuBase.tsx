import { useRef, useState } from 'react'

import { Button, Menu, MenuItem } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const MenuBase = () => {
  const target = useRef<HTMLElement>(null)
  const [open, setOpen] = useState(false)
  const [sort, setSort] = useState('По имени')

  return (
    <Styled.Column>
      <Button
        ref={target}
        type="button"
        color="primary"
        variant="outlined"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}>
        Сортировка
      </Button>
      <Menu target={target} open={open} position="bottom" shift={4}>
        {['По имени', 'По дате'].map((option) => (
          <MenuItem key={option}>
            <Button
              type="button"
              uppercase={false}
              onClick={() => {
                setSort(option)
                setOpen(false)
                target.current?.focus()
              }}>
              {option}
            </Button>
          </MenuItem>
        ))}
      </Menu>
      <output>{sort}</output>
    </Styled.Column>
  )
}

MenuBase.displayName = 'MenuBase'

export default MenuBase
