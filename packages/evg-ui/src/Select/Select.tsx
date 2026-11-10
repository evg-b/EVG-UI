import {
  Children,
  cloneElement,
  isValidElement,
  useState,
  useEffect,
  useRef
} from 'react'

import { useMergedRefs } from '../hooks/useMergedRefs'
import TextField from '../TextField/TextField'
import List from '../List/List'
import SelectOption from '../SelectOption/SelectOption'
import type { SelectOptionProps } from '../SelectOption/SelectOption.types'
import Popup from '../Popup/Popup'
import { ExpandMore } from '../internal/icons/Select'

import type { SelectProps } from './Select.types'

import * as Styled from './Select.styled'

// Select позволяет пользователям выбирать из меню с одним параметром.
const Select = ({
  ref,
  className,
  children,
  value,
  emptyOption = false,
  onChange,
  color = 'default',
  disabled = false,
  ...otherProps
}: SelectProps) => {
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)
  const mergedRef = useMergedRefs(inputRef, ref)
  const [open, setOpen] = useState(false)
  const [minWidth, setMinWidth] = useState(0)
  const [selectedValue, setSelectedValue] = useState(value)
  const currentValue = value === undefined ? selectedValue : value
  const optionMap = new Map<string | number, string | number>()

  Children.forEach(children, (child) => {
    if (!isValidElement<SelectOptionProps>(child)) return
    const { value: optionValue, children: label } = child.props
    if (
      optionValue !== undefined &&
      (typeof label === 'string' || typeof label === 'number')
    ) {
      optionMap.set(optionValue, label)
    }
  })

  const handleCloseSelectList = () => {
    inputRef.current?.blur()
    setOpen(false)
  }

  const handleSelect = (optionValue: string | number) => {
    setSelectedValue(optionValue)
    onChange?.(optionValue)
    handleCloseSelectList()
  }

  useEffect(() => {
    if (inputRef.current) setMinWidth(inputRef.current.clientWidth)
  }, [])

  return (
    <Styled.Root className={className}>
      <Styled.Field
        as={TextField}
        ref={mergedRef}
        readOnly
        value={
          currentValue === undefined ? '' : (optionMap.get(currentValue) ?? '')
        }
        onClick={() => setOpen(true)}
        color={color}
        disabled={disabled}
        {...otherProps}
      />
      <Styled.SelectIcon
        as={ExpandMore}
        color={open ? color : 'default'}
        $selectIconOpen={open}
      />
      <Styled.Popup
        as={Popup}
        target={inputRef}
        open={open}
        mode="click"
        onClose={handleCloseSelectList}
        $minWidth={minWidth}>
        <Styled.SelectList as={List} color={color}>
          {emptyOption && <SelectOption onClick={() => handleSelect('')} />}
          {Children.map(children, (child) => {
            if (
              !isValidElement<SelectOptionProps>(child) ||
              child.props.value === undefined
            )
              return child
            const optionValue = child.props.value
            return cloneElement(child, {
              onClick: () => handleSelect(optionValue),
              active: optionValue === currentValue
            })
          })}
        </Styled.SelectList>
      </Styled.Popup>
    </Styled.Root>
  )
}

Select.displayName = 'SelectEVG'

export default Select
