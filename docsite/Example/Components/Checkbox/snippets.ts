const sources = {
  "CheckboxBase.tsx": "import { Checkbox } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst CheckboxBase = () => {\n  return (\n    <Styled.Row>\n      <Checkbox />\n      <Checkbox defaultChecked />\n      <Checkbox checked />\n      <Checkbox defaultChecked disabled />\n      <Checkbox defaultChecked indeterminate />\n    </Styled.Row>\n  )\n}\n\nCheckboxBase.displayName = 'CheckboxBase'\n\nexport default CheckboxBase\n",
  "../../ExampleLayout.styled.ts": "import styled from 'styled-components'\n\nexport const Wrap = styled.div`\n  display: flex;\n  flex-wrap: wrap;\n`\n\nexport const Row = styled(Wrap)`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const SpaciousRow = styled(Wrap)`\n  & > * {\n    margin: 10px;\n  }\n`\n\nexport const InlineGroup = styled.div`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const Column = styled(InlineGroup)`\n  display: flex;\n  flex-direction: column;\n`\n\nexport const CenteredColumn = styled(Column)`\n  align-items: center;\n`\n\nexport const AppBarColumn = styled.div`\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  align-items: center;\n`\n\nexport const FieldGroups = styled(Wrap)`\n  & > *,\n  & > div > * {\n    margin: 10px;\n  }\n`\n",
  "CheckboxColor.tsx": "import { Checkbox } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst CheckboxColor = () => {\n  return (\n    <Styled.Row>\n      <Checkbox color=\"default\" defaultChecked />\n      <Checkbox color=\"primary\" defaultChecked />\n      <Checkbox color=\"warn\" defaultChecked />\n      <Checkbox color=\"success\" defaultChecked />\n      <Checkbox color=\"fail\" defaultChecked />\n    </Styled.Row>\n  )\n}\n\nCheckboxColor.displayName = 'CheckboxColor'\n\nexport default CheckboxColor\n",
  "CheckboxSize.tsx": "import { Checkbox } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst CheckboxSize = () => {\n  return (\n    <Styled.InlineGroup>\n      <Checkbox size=\"small\" color=\"primary\" defaultChecked />\n      <Checkbox size=\"medium\" color=\"primary\" defaultChecked />\n      <Checkbox size=\"large\" color=\"primary\" defaultChecked />\n      <Checkbox size=\"extra\" color=\"primary\" defaultChecked />\n    </Styled.InlineGroup>\n  )\n}\n\nCheckboxSize.displayName = 'CheckboxSize'\n\nexport default CheckboxSize\n"
}

const snippets = {
  CheckboxBase: {
    "CheckboxBase.tsx": sources["CheckboxBase.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  CheckboxColor: {
    "CheckboxColor.tsx": sources["CheckboxColor.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  CheckboxSize: {
    "CheckboxSize.tsx": sources["CheckboxSize.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  }
}

export default snippets
