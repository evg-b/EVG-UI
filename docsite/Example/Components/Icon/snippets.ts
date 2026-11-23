const sources = {
  "IconBase.tsx": "import { Icon } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst IconBase = () => {\n  return (\n    <Styled.Row>\n      <Icon name=\"ChevronLeft\" />\n      <Icon name=\"Close\" />\n      <Icon name=\"Check\" />\n      <Icon name=\"Cancel\" />\n      <Icon name=\"Fullscreen\" />\n      <Icon name=\"Menu\" />\n      <Icon name=\"MoreVert\" />\n      <Icon name=\"ExpandMore\" />\n      <Icon name=\"ArrowUpward\" />\n    </Styled.Row>\n  )\n}\n\nIconBase.displayName = 'IconBase'\n\nexport default IconBase\n",
  "../../ExampleLayout.styled.ts": "import styled from 'styled-components'\n\nexport const Wrap = styled.div`\n  display: flex;\n  flex-wrap: wrap;\n`\n\nexport const Row = styled(Wrap)`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const SpaciousRow = styled(Wrap)`\n  & > * {\n    margin: 10px;\n  }\n`\n\nexport const InlineGroup = styled.div`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const Column = styled(InlineGroup)`\n  display: flex;\n  flex-direction: column;\n`\n\nexport const CenteredColumn = styled(Column)`\n  align-items: center;\n`\n\nexport const AppBarColumn = styled.div`\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  align-items: center;\n`\n\nexport const FieldGroups = styled(Wrap)`\n  & > *,\n  & > div > * {\n    margin: 10px;\n  }\n`\n",
  "IconColor.tsx": "import { Icon } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst IconColor = () => {\n  return (\n    <Styled.Row>\n      <Icon name=\"Cancel\" color=\"primary\" />\n      <Icon name=\"ChevronLeft\" color=\"warn\" />\n      <Icon name=\"Close\" color=\"fail\" />\n      <Icon name=\"Check\" color=\"success\" />\n    </Styled.Row>\n  )\n}\n\nIconColor.displayName = 'IconColor'\n\nexport default IconColor\n",
  "IconSize.tsx": "import { Icon } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst IconSize = () => {\n  return (\n    <Styled.Row>\n      <Icon name=\"Cancel\" size=\"small\" />\n      <Icon name=\"Cancel\" size=\"medium\" />\n      <Icon name=\"Cancel\" size=\"large\" />\n      <Icon name=\"Cancel\" size=\"extra\" />\n    </Styled.Row>\n  )\n}\n\nIconSize.displayName = 'IconSize'\n\nexport default IconSize\n"
}

const snippets = {
  IconBase: {
    "IconBase.tsx": sources["IconBase.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  IconColor: {
    "IconColor.tsx": sources["IconColor.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  IconSize: {
    "IconSize.tsx": sources["IconSize.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  }
}

export default snippets
