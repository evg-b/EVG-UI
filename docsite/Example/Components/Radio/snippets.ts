const sources = {
  "RadioBase.tsx": "import { useId } from 'react'\n\nimport { Radio } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst RadioBase = () => {\n  const group = useId()\n\n  return (\n    <Styled.Row>\n      <Radio id={`${group}-day`} name={group} defaultChecked />\n      <label htmlFor={`${group}-day`}>День</label>\n      <Radio id={`${group}-week`} name={group} />\n      <label htmlFor={`${group}-week`}>Неделя</label>\n      <Radio id={`${group}-month`} name={group} disabled />\n      <label htmlFor={`${group}-month`}>Месяц</label>\n    </Styled.Row>\n  )\n}\n\nRadioBase.displayName = 'RadioBase'\n\nexport default RadioBase\n",
  "../../ExampleLayout.styled.ts": "import styled from 'styled-components'\n\nexport const Wrap = styled.div`\n  display: flex;\n  flex-wrap: wrap;\n`\n\nexport const Row = styled(Wrap)`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const SpaciousRow = styled(Wrap)`\n  & > * {\n    margin: 10px;\n  }\n`\n\nexport const InlineGroup = styled.div`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const Column = styled(InlineGroup)`\n  display: flex;\n  flex-direction: column;\n`\n\nexport const CenteredColumn = styled(Column)`\n  align-items: center;\n`\n\nexport const AppBarColumn = styled.div`\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  align-items: center;\n`\n\nexport const FieldGroups = styled(Wrap)`\n  & > *,\n  & > div > * {\n    margin: 10px;\n  }\n`\n",
  "RadioColor.tsx": "import type { ChangeEvent } from 'react'\n\nimport { useState } from 'react'\nimport { Radio } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst RadioColor = () => {\n  const [checkName, setCheckName] = useState('radio1')\n\n  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {\n    setCheckName(e.target.name)\n  }\n\n  return (\n    <Styled.Row>\n      <Radio\n        onChange={handleChange}\n        checked={checkName === 'radio1'}\n        name=\"radio1\"\n        color=\"default\"\n      />\n      <Radio\n        onChange={handleChange}\n        checked={checkName === 'radio2'}\n        name=\"radio2\"\n        color=\"primary\"\n      />\n      <Radio\n        onChange={handleChange}\n        checked={checkName === 'radio3'}\n        name=\"radio3\"\n        color=\"warn\"\n      />\n      <Radio\n        onChange={handleChange}\n        checked={checkName === 'radio4'}\n        name=\"radio4\"\n        color=\"success\"\n      />\n      <Radio\n        onChange={handleChange}\n        checked={checkName === 'radio5'}\n        name=\"radio5\"\n        color=\"fail\"\n      />\n    </Styled.Row>\n  )\n}\n\nRadioColor.displayName = 'RadioColor'\n\nexport default RadioColor\n",
  "RadioSize.tsx": "import { Radio } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst RadioSize = () => {\n  return (\n    <Styled.InlineGroup>\n      <Radio size=\"small\" color=\"primary\" />\n      <Radio size=\"medium\" color=\"primary\" />\n      <Radio size=\"large\" color=\"primary\" />\n      <Radio size=\"extra\" color=\"primary\" />\n    </Styled.InlineGroup>\n  )\n}\n\nRadioSize.displayName = 'RadioSize'\n\nexport default RadioSize\n"
}

const snippets = {
  RadioBase: {
    "RadioBase.tsx": sources["RadioBase.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  RadioColor: {
    "RadioColor.tsx": sources["RadioColor.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  RadioSize: {
    "RadioSize.tsx": sources["RadioSize.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  }
}

export default snippets
