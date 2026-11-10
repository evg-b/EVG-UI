import { useState, useRef, useId, type FocusEvent } from 'react'

import type { TextFieldProps } from './TextField.types'

import * as Styled from './TextField.styled'

const TextField = ({
  ref,
  className,
  children,
  component = 'input',
  id: idProp,
  color = 'default',
  placeholder = '',
  value,
  defaultValue = '',
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
  onFocus,
  onBlur,
  ...otherProps
}: TextFieldProps) => {
  const generatedId = useId()
  const id = idProp ?? generatedId
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue)
  const inputValue = value ?? uncontrolledValue
  const notchRef = useRef<HTMLDivElement>(null)

  const handleChange: TextFieldProps['onChange'] = (event) => {
    if (maxCount !== 0 && event.target.value.length > maxCount) {
      event.target.value = String(inputValue)
    } else {
      if (value === undefined) setUncontrolledValue(event.target.value)
      onChange?.(event)
    }
  }

  const handleFocus = (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const notch = notchRef.current
    if (outlined && notch && notch.style.width === '' && labelText !== '') {
      const labelWidth = notch.getBoundingClientRect().width * 0.75 - 4
      notch.style.width = `${labelWidth + 8}px`
    }
    onFocus?.(event)
  }

  const handleBlur = (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (
      outlined &&
      notchRef.current &&
      event.target.value === '' &&
      labelText !== ''
    ) {
      notchRef.current.style.cssText = ''
    }
    onBlur?.(event)
  }
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
          ref={ref}
          value={inputValue}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...(multiline
            ? {
                rows
              }
            : {})}
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
}

TextField.displayName = 'TextFieldEVG'
export default TextField
