import { Skeleton } from '@evg-b/evg-ui'

import * as Styled from './Skeleton.styled'

const variants = ['h1', 'h2', 'h3', 'text']

const SkeletonText = () => (
  <Styled.Column>
    {variants.map((variant) => (
      <Styled.TextSample key={variant}>
        <Skeleton width={100} type={`text,${variant}`} />
        <span>{variant}</span>
      </Styled.TextSample>
    ))}
  </Styled.Column>
)

SkeletonText.displayName = 'SkeletonText'

export default SkeletonText
