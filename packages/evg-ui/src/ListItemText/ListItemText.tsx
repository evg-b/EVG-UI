import type { ListItemTextProps } from './ListItemText.types'

import * as Styled from './ListItemText.styled'

// Компонент для правильного отображения текста в List.

const ListItemText = ({
  ref,
  className,
  children,
  secondaryText: SecondaryTextProp = '',
  meta: MetaProp,
  secondaryMeta: SecondaryMetaProp,
  color = 'surface',
  ...otherProps
}: ListItemTextProps) => {
  const meta = MetaProp && <Styled.Meta $color={color}>{MetaProp}</Styled.Meta>
  const secondaryMeta = SecondaryMetaProp && (
    <Styled.Meta $color={color}>{SecondaryMetaProp}</Styled.Meta>
  )
  const secondaryText = SecondaryTextProp && (
    <Styled.SecondaryText $color={color}>
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
      $color={color}>
      <Styled.PrimaryText $color={color}>
        <span>{children}</span>
        {meta}
      </Styled.PrimaryText>
      {secondaryText}
    </Styled.Root>
  )
}

ListItemText.displayName = 'ListItemTextEVG'
export default ListItemText
