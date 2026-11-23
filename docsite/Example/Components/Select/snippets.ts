const sources = {
  "SelectBase.tsx": "import { Select, SelectOption } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst SelectBase = () => {\n  return (\n    <Styled.Row>\n      <Select labelText=\"Select\">\n        <SelectOption value={10}>Item - 1</SelectOption>\n        <SelectOption value={20}>Item - 2</SelectOption>\n        <SelectOption value={30}>Item - 3</SelectOption>\n      </Select>\n      <Select labelText=\"Select\" value={20}>\n        <SelectOption value={10}>Item - 1</SelectOption>\n        <SelectOption value={20}>Item - 2</SelectOption>\n        <SelectOption value={30}>Item - 3</SelectOption>\n      </Select>\n      <Select disabled labelText=\"Select\">\n        <SelectOption value={10}>Item - 1</SelectOption>\n        <SelectOption value={20}>Item - 2</SelectOption>\n        <SelectOption value={30}>Item - 3</SelectOption>\n      </Select>\n    </Styled.Row>\n  )\n}\n\nSelectBase.displayName = 'SelectBase'\n\nexport default SelectBase\n",
  "../../ExampleLayout.styled.ts": "import styled from 'styled-components'\n\nexport const Wrap = styled.div`\n  display: flex;\n  flex-wrap: wrap;\n`\n\nexport const Row = styled(Wrap)`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const SpaciousRow = styled(Wrap)`\n  & > * {\n    margin: 10px;\n  }\n`\n\nexport const InlineGroup = styled.div`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const Column = styled(InlineGroup)`\n  display: flex;\n  flex-direction: column;\n`\n\nexport const CenteredColumn = styled(Column)`\n  align-items: center;\n`\n\nexport const AppBarColumn = styled.div`\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  align-items: center;\n`\n\nexport const FieldGroups = styled(Wrap)`\n  & > *,\n  & > div > * {\n    margin: 10px;\n  }\n`\n",
  "SelectColor.tsx": "import { Select, SelectOption } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst SelectColor = () => {\n  return (\n    <Styled.Row>\n      <Select labelText=\"Select\">\n        <SelectOption value={10}>Item - 1</SelectOption>\n        <SelectOption value={20}>Item - 2</SelectOption>\n        <SelectOption value={30}>Item - 3</SelectOption>\n      </Select>\n      <Select color=\"purple700\" labelText=\"Select\" value={20}>\n        <SelectOption value={10}>Item - 1</SelectOption>\n        <SelectOption value={20}>Item - 2</SelectOption>\n        <SelectOption value={30}>Item - 3</SelectOption>\n      </Select>\n      <Select color=\"purple700\" outlined labelText=\"Select\">\n        <SelectOption value={10}>Item - 1</SelectOption>\n        <SelectOption value={20}>Item - 2</SelectOption>\n        <SelectOption value={30}>Item - 3</SelectOption>\n      </Select>\n    </Styled.Row>\n  )\n}\n\nSelectColor.displayName = 'SelectColor'\n\nexport default SelectColor\n",
  "SelectEmptyOption.tsx": "import { Select, SelectOption } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst SelectEmptyOption = () => {\n  return (\n    <Styled.Row>\n      <Select labelText=\"Select\" emptyOption>\n        <SelectOption value={10}>Item - 1</SelectOption>\n        <SelectOption value={20}>Item - 2</SelectOption>\n        <SelectOption value={30}>Item - 3</SelectOption>\n      </Select>\n    </Styled.Row>\n  )\n}\n\nSelectEmptyOption.displayName = 'SelectEmptyOption'\n\nexport default SelectEmptyOption\n"
}

const snippets = {
  SelectBase: {
    "SelectBase.tsx": sources["SelectBase.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  SelectColor: {
    "SelectColor.tsx": sources["SelectColor.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  SelectEmptyOption: {
    "SelectEmptyOption.tsx": sources["SelectEmptyOption.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  }
}

export default snippets
