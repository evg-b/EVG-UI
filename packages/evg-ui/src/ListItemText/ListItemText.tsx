import React, { forwardRef } from 'react'
import type { ListItemTextProps } from './ListItemText.types'
import * as Styled from './ListItemText.styled'

// Компонент для правильного отображения текста в List.
const ListItemText = forwardRef<HTMLDivElement, ListItemTextProps>(
  function ListItemText(props, ref) {
    const {
      className,
      children,
      secondaryText: SecondaryTextProp,
      meta: MetaProp,
      secondaryMeta: SecondaryMetaProp,
      ...otherProps
    } = props
    const meta = MetaProp && (
      <Styled.Meta $color={props.color}>{MetaProp}</Styled.Meta>
    )
    const secondaryMeta = SecondaryMetaProp && (
      <Styled.Meta $color={props.color}>{SecondaryMetaProp}</Styled.Meta>
    )
    const secondaryText = SecondaryTextProp && (
      <Styled.SecondaryText $color={props.color}>
        <span>{SecondaryTextProp}</span>
        {secondaryMeta}
      </Styled.SecondaryText>
    )
    return (
      <Styled.Root
        ref={ref}
        {...otherProps}
        className={className}
        $singleLine={Boolean(!SecondaryTextProp)}
        $twoLine={Boolean(SecondaryTextProp)}
        $color={props.color}>
        <Styled.PrimaryText $color={props.color}>
          <span>{children}</span>
          {meta}
        </Styled.PrimaryText>
        {secondaryText}
      </Styled.Root>
    )
  }
)
ListItemText.defaultProps = {
  secondaryText: '',
  color: 'surface'
}
ListItemText.displayName = 'ListItemTextEVG'
export default ListItemText
