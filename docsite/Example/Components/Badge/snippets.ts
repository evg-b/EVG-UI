const sources = {
  "BadgeBase.tsx": "import { Badge, Icon } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst BadgeBase = () => {\n  return (\n    <Styled.Row>\n      <Icon name=\"Notifications\" />\n      <Badge count={3} color=\"primary\">\n        <Icon name=\"Notifications\" />\n      </Badge>\n    </Styled.Row>\n  )\n}\n\nBadgeBase.displayName = 'BadgeBase'\n\nexport default BadgeBase\n",
  "../../ExampleLayout.styled.ts": "import styled from 'styled-components'\n\nexport const Wrap = styled.div`\n  display: flex;\n  flex-wrap: wrap;\n`\n\nexport const Row = styled(Wrap)`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const SpaciousRow = styled(Wrap)`\n  & > * {\n    margin: 10px;\n  }\n`\n\nexport const InlineGroup = styled.div`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const Column = styled(InlineGroup)`\n  display: flex;\n  flex-direction: column;\n`\n\nexport const CenteredColumn = styled(Column)`\n  align-items: center;\n`\n\nexport const AppBarColumn = styled.div`\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  align-items: center;\n`\n\nexport const FieldGroups = styled(Wrap)`\n  & > *,\n  & > div > * {\n    margin: 10px;\n  }\n`\n",
  "BadgeCircle.tsx": "import { Avatar, Badge } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst BadgeDot = () => {\n  return (\n    <Styled.Row>\n      <Badge count={2}>\n        <Avatar />\n      </Badge>\n      <Badge count={2} dot>\n        <Avatar />\n      </Badge>\n      <Badge count={2} circle>\n        <Avatar />\n      </Badge>\n      <Badge count={2} dot circle>\n        <Avatar />\n      </Badge>\n    </Styled.Row>\n  )\n}\n\nBadgeDot.displayName = 'BadgeDot'\n\nexport default BadgeDot\n",
  "BadgeColor.tsx": "import { Badge, Icon } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst BadgeColor = () => {\n  return (\n    <Styled.Row>\n      <Badge count={3}>\n        <Icon name=\"Notifications\" />\n      </Badge>\n      <Badge count={3} color=\"primary\">\n        <Icon name=\"Notifications\" />\n      </Badge>\n      <Badge count={3} color=\"warn\">\n        <Icon name=\"Notifications\" />\n      </Badge>\n      <Badge count={3} color=\"success\">\n        <Icon name=\"Notifications\" />\n      </Badge>\n    </Styled.Row>\n  )\n}\n\nBadgeColor.displayName = 'BadgeColor'\n\nexport default BadgeColor\n",
  "BadgeDot.tsx": "import { Badge, Icon } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst BadgeDot = () => {\n  return (\n    <Styled.Row>\n      <Badge count={2}>\n        <Icon name=\"Notifications\" />\n      </Badge>\n      <Badge count={2} dot>\n        <Icon name=\"Notifications\" />\n      </Badge>\n    </Styled.Row>\n  )\n}\n\nBadgeDot.displayName = 'BadgeDot'\n\nexport default BadgeDot\n",
  "BadgeMax.tsx": "import { Badge, Icon } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst BadgeMax = () => {\n  return (\n    <Styled.Row>\n      <Badge count={1000} max={9}>\n        <Icon name=\"Notifications\" />\n      </Badge>\n      <Badge count={1000} max={99}>\n        <Icon name=\"Notifications\" />\n      </Badge>\n      <Badge count={1000} max={999}>\n        <Icon name=\"Notifications\" />\n      </Badge>\n    </Styled.Row>\n  )\n}\n\nBadgeMax.displayName = 'BadgeMax'\n\nexport default BadgeMax\n",
  "BadgeRipe.tsx": "import { Badge, Icon } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst BadgeRipe = () => {\n  return (\n    <Styled.Row>\n      <Badge count={3}>\n        <Icon name=\"Notifications\" />\n      </Badge>\n      <Badge ripe count={3} />\n    </Styled.Row>\n  )\n}\n\nBadgeRipe.displayName = 'BadgeRipe'\n\nexport default BadgeRipe\n"
}

const snippets = {
  BadgeBase: {
    "BadgeBase.tsx": sources["BadgeBase.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  BadgeCircle: {
    "BadgeCircle.tsx": sources["BadgeCircle.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  BadgeColor: {
    "BadgeColor.tsx": sources["BadgeColor.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  BadgeDot: {
    "BadgeDot.tsx": sources["BadgeDot.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  BadgeMax: {
    "BadgeMax.tsx": sources["BadgeMax.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  BadgeRipe: {
    "BadgeRipe.tsx": sources["BadgeRipe.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  }
}

export default snippets
