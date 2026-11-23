const sources = {
  "SkeletonAnimation.tsx": "import { Skeleton } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst SkeletonAnimation = () => {\n  return (\n    <Styled.Row>\n      <Skeleton animation={true} />\n      <Skeleton animation={false} />\n    </Styled.Row>\n  )\n}\n\nSkeletonAnimation.displayName = 'SkeletonAnimation'\n\nexport default SkeletonAnimation\n",
  "../../ExampleLayout.styled.ts": "import styled from 'styled-components'\n\nexport const Wrap = styled.div`\n  display: flex;\n  flex-wrap: wrap;\n`\n\nexport const Row = styled(Wrap)`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const SpaciousRow = styled(Wrap)`\n  & > * {\n    margin: 10px;\n  }\n`\n\nexport const InlineGroup = styled.div`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const Column = styled(InlineGroup)`\n  display: flex;\n  flex-direction: column;\n`\n\nexport const CenteredColumn = styled(Column)`\n  align-items: center;\n`\n\nexport const AppBarColumn = styled.div`\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  align-items: center;\n`\n\nexport const FieldGroups = styled(Wrap)`\n  & > *,\n  & > div > * {\n    margin: 10px;\n  }\n`\n",
  "SkeletonAvatar.tsx": "import { Skeleton } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst SkeletonAvatar = () => {\n  return (\n    <Styled.Row>\n      <Skeleton type=\"avatar\" size={20} />\n      <Skeleton type=\"avatar\" />\n      <Skeleton type=\"avatar\" size={100} />\n    </Styled.Row>\n  )\n}\n\nSkeletonAvatar.displayName = 'SkeletonAvatar'\n\nexport default SkeletonAvatar\n",
  "SkeletonBase.tsx": "import { Skeleton } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst SkeletonBase = () => {\n  return (\n    <Styled.Row>\n      <Skeleton />\n      <Skeleton width={160} />\n      <Skeleton width={100} borderRadius={16} />\n    </Styled.Row>\n  )\n}\n\nSkeletonBase.displayName = 'SkeletonBase'\n\nexport default SkeletonBase\n",
  "SkeletonText.tsx": "import { Skeleton } from '@evg-b/evg-ui'\n\nimport * as Styled from './Skeleton.styled'\n\nconst variants = ['h1', 'h2', 'h3', 'text']\n\nconst SkeletonText = () => (\n  <Styled.Column>\n    {variants.map((variant) => (\n      <Styled.TextSample key={variant}>\n        <Skeleton width={100} type={`text,${variant}`} />\n        <span>{variant}</span>\n      </Styled.TextSample>\n    ))}\n  </Styled.Column>\n)\n\nSkeletonText.displayName = 'SkeletonText'\n\nexport default SkeletonText\n",
  "Skeleton.styled.ts": "import styled from 'styled-components'\n\nexport { Column } from '../../ExampleLayout.styled'\n\nexport const TextSample = styled.div`\n  display: flex;\n  align-items: center;\n  gap: 6px;\n`\n"
}

const snippets = {
  SkeletonAnimation: {
    "SkeletonAnimation.tsx": sources["SkeletonAnimation.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  SkeletonAvatar: {
    "SkeletonAvatar.tsx": sources["SkeletonAvatar.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  SkeletonBase: {
    "SkeletonBase.tsx": sources["SkeletonBase.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  SkeletonText: {
    "SkeletonText.tsx": sources["SkeletonText.tsx"],
    "Skeleton.styled.ts": sources["Skeleton.styled.ts"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  }
}

export default snippets
