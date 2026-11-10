import React, { forwardRef, useState, useEffect, useRef } from 'react'

import type { TextFieldProps } from './TextField.types'

import * as Styled from './TextField.styled'

const TextField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextFieldProps
>(function TextField(
  {
    className,
    children,
    component = 'input',
    id = 'nameInputEVG',
    color = 'default',
    placeholder = '',
    value = '',
    labelText = '',
    helperText = '',
    outlined = false,
    fullWidth = false,
    round = false,
    multiline = false,
    error = false,
    rows = 1,
    maxCount = 0,
    leadingIcon,
    trailingIcon,
    onChange,
    ...otherProps
  },
  ref
) {
  let inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)
  inputRef = ref || inputRef
  const [inputValue, setInputValue] = useState(value)
  const notchRef = useRef<HTMLDivElement>(null)

  const handleChange: TextFieldProps['onChange'] = (event) => {
    if (maxCount !== 0 && event.target.value.length > maxCount) {
      event.target.value = String(inputValue)
    } else {
      onChange?.(event)
      setInputValue(event.target.value)
    }
  }

  const handleFocus = () => {
    const notch = notchRef.current
    const labelWidth = notch.getBoundingClientRect().width * 0.75 - 4
    if (notch.style.width === '' && labelText !== '') {
      notch.style.width = `${labelWidth + 8}px`
    }
  }

  const handleBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.target.value === '' && labelText !== '') {
      notchRef.current.style.cssText = ''
    }
  }

  useEffect(() => {
    inputRef.current.value = String(value)
    setInputValue(value)
  }, [value])

  return (
    <Styled.Root
      className={className}
      $color={color}
      $error={error}
      $fullWidth={fullWidth}
      $disabled={otherProps.disabled}>
      <Styled.Surface $outlined={outlined} $round={round}>
        {leadingIcon && <Styled.LeadingIcon>{leadingIcon}</Styled.LeadingIcon>}
        {trailingIcon && (
          <Styled.TrailingIcon>{trailingIcon}</Styled.TrailingIcon>
        )}
        <Styled.Input
          as={multiline ? 'textarea' : component}
          id={id}
          name="name"
          type="text"
          ref={inputRef}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={outlined ? handleFocus : undefined}
          onBlur={outlined ? handleBlur : undefined}
          {...(multiline ? { rows } : {})}
          {...otherProps}
          $outlined={outlined}
          $hasLabel={Boolean(labelText)}
        />
        <Styled.Notched
          $outlined={outlined}
          $hasValue={Boolean(inputValue)}
          $hasLabel={Boolean(labelText)}>
          <Styled.NotchedLeading />
          <Styled.Notch ref={notchRef}>
            {labelText && <Styled.Label htmlFor={id}>{labelText}</Styled.Label>}
          </Styled.Notch>
          <Styled.NotchedTrailing />
        </Styled.Notched>
        {!outlined && <Styled.Line />}
      </Styled.Surface>
      {helperText && (
        <Styled.HelperLine>
          <span>{helperText}</span>
          {maxCount !== 0 && (
            <span>
              {String(inputValue).length}/{maxCount}
            </span>
          )}
        </Styled.HelperLine>
      )}
    </Styled.Root>
  )
})

TextField.displayName = 'TextFieldEVG'

export default TextField
