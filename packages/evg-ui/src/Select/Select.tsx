import React, { useState, useEffect, useRef, forwardRef } from 'react'
import TextField from '../TextField/TextField'
import List from '../List/List'
import SelectOption from '../SelectOption/SelectOption'
import Popup from '../Popup/Popup'
import { ExpandMore } from '../internal/icons/Select'
import type { SelectProps } from './Select.types'
import * as Styled from './Select.styled'

// Select позволяет пользователям выбирать из меню с одним параметром.
const Select = forwardRef<HTMLInputElement | HTMLTextAreaElement, SelectProps>(
  function Select(props, ref) {
    const {
      className,
      children,
      value,
      emptyOption,
      onChange,
      color,
      disabled,
      ...otherProps
    } = props
    let Select_ref = useRef()
    Select_ref = ref || Select_ref
    const [open, setOpen] = useState(false)
    const [minWidth, setMinWidth] = useState(0)
    const optionMap = new Map()
    React.Children.forEach(children, (child) => {
      let value = child.props.value
      let children = child.props.children

      if (value && children) {
        optionMap.set(value, children)
      }
    })
    const [valueSelect, setValueSelect] = useState(optionMap.get(value))

    const handelClick = ({ currentTarget }) => {
      setValueSelect(optionMap.get(currentTarget.value))
      onChange && onChange(currentTarget.value)
      handleCloseSelectList()
    }

    const emptySelectOption = () => <SelectOption onClick={handelClick} />

    const handleOpenSelectList = () => {
      setOpen(true)
    }

    const handleCloseSelectList = () => {
      Select_ref.current.blur()
      setOpen(false)
    }

    useEffect(() => {
      // TODO: оптимизировать и закешировать, чтобы срабатывала только два раза
      // в первый render ширина может учитываться margin и clientWidth почему то не помогает(а должен)
      // он помогает при первом показе, вот тогда нужно зафиксировать новое значение(правильное) и больше не менять
      setMinWidth(Select_ref.current.clientWidth)
    }, [])
    return (
      <Styled.Root className={className}>
        <Styled.Field
          as={TextField}
          ref={Select_ref}
          readOnly
          value={valueSelect}
          onClick={handleOpenSelectList}
          color={color}
          disabled={disabled}
          {...otherProps}
        />
        <Styled.SelectIcon
          as={ExpandMore}
          color={open ? color : 'default'}
          disabled={disabled}
          $selectIconOpen={Boolean(open)}
        />
        <Styled.Popup
          as={Popup}
          target={Select_ref}
          open={open}
          mode="click"
          onClose={handleCloseSelectList}
          $minWidth={minWidth}>
          <Styled.SelectList as={List} color={color}>
            {emptyOption && emptySelectOption()}
            {React.Children.map(children, (child) => {
              if (child.props.value && child.props.children) {
                return (
                  child &&
                  React.cloneElement(child, {
                    onClick: handelClick,
                    active: child.props.children === valueSelect
                  })
                )
              } else {
                console.error(
                  `[evg-ui] <Select/>: <SelectOption/> empty 'value' or 'children'`
                )
              }
            })}
          </Styled.SelectList>
        </Styled.Popup>
      </Styled.Root>
    )
  }
)
Select.defaultProps = {
  emptyOption: false,
  disabled: false,
  color: 'default'
}
Select.displayName = 'SelectEVG'
export default Select
