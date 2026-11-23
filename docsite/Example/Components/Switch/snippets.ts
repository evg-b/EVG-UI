const sources = {
  "SwitchBase.tsx": "import { Switch } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst SwitchBase = () => {\n  return (\n    <Styled.SpaciousRow>\n      <Switch />\n      <Switch defaultChecked />\n      <Switch checked />\n      <Switch disabled checked />\n    </Styled.SpaciousRow>\n  )\n}\n\nSwitchBase.displayName = 'SwitchBase'\n\nexport default SwitchBase\n",
  "../../ExampleLayout.styled.ts": "import styled from 'styled-components'\n\nexport const Wrap = styled.div`\n  display: flex;\n  flex-wrap: wrap;\n`\n\nexport const Row = styled(Wrap)`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const SpaciousRow = styled(Wrap)`\n  & > * {\n    margin: 10px;\n  }\n`\n\nexport const InlineGroup = styled.div`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const Column = styled(InlineGroup)`\n  display: flex;\n  flex-direction: column;\n`\n\nexport const CenteredColumn = styled(Column)`\n  align-items: center;\n`\n\nexport const AppBarColumn = styled.div`\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  align-items: center;\n`\n\nexport const FieldGroups = styled(Wrap)`\n  & > *,\n  & > div > * {\n    margin: 10px;\n  }\n`\n",
  "SwitchColor.tsx": "import { Switch } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst SwitchColor = () => {\n  return (\n    <Styled.Row>\n      <Switch color=\"default\" defaultChecked />\n      <Switch color=\"primary\" defaultChecked />\n      <Switch color=\"warn\" defaultChecked />\n      <Switch color=\"success\" defaultChecked />\n      <Switch color=\"fail\" defaultChecked />\n    </Styled.Row>\n  )\n}\n\nSwitchColor.displayName = 'SwitchColor'\n\nexport default SwitchColor\n",
  "SwitchSize.tsx": "import { Switch } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst SwitchSize = () => {\n  return (\n    <Styled.Row>\n      <Switch size=\"small\" color=\"primary\" defaultChecked />\n      <Switch size=\"medium\" color=\"primary\" defaultChecked />\n      <Switch size=\"large\" color=\"primary\" defaultChecked />\n      <Switch size=\"extra\" color=\"primary\" defaultChecked />\n    </Styled.Row>\n  )\n}\n\nSwitchSize.displayName = 'SwitchSize'\n\nexport default SwitchSize\n",
  "SwitchVariant.tsx": "import { Switch } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst SwitchVariant = () => {\n  return (\n    <Styled.Row>\n      <Switch />\n      <Switch />\n      <Switch />\n    </Styled.Row>\n  )\n}\n\nSwitchVariant.displayName = 'SwitchVariant'\n\nexport default SwitchVariant\n"
}

const snippets = {
  SwitchBase: {
    "SwitchBase.tsx": sources["SwitchBase.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  SwitchColor: {
    "SwitchColor.tsx": sources["SwitchColor.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  SwitchSize: {
    "SwitchSize.tsx": sources["SwitchSize.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  SwitchVariant: {
    "SwitchVariant.tsx": sources["SwitchVariant.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  }
}

export default snippets
