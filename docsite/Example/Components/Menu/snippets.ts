const sources = {
  "MenuBase.tsx": "import { useRef, useState } from 'react'\n\nimport { Button, Menu, MenuItem } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst MenuBase = () => {\n  const target = useRef<HTMLElement>(null)\n  const [open, setOpen] = useState(false)\n  const [sort, setSort] = useState('По имени')\n\n  return (\n    <Styled.Column>\n      <Button\n        ref={target}\n        type=\"button\"\n        color=\"primary\"\n        variant=\"outlined\"\n        aria-expanded={open}\n        onClick={() => setOpen((value) => !value)}>\n        Сортировка\n      </Button>\n      <Menu target={target} open={open} position=\"bottom\" shift={4}>\n        {['По имени', 'По дате'].map((option) => (\n          <MenuItem key={option}>\n            <Button\n              type=\"button\"\n              uppercase={false}\n              onClick={() => {\n                setSort(option)\n                setOpen(false)\n                target.current?.focus()\n              }}>\n              {option}\n            </Button>\n          </MenuItem>\n        ))}\n      </Menu>\n      <output>{sort}</output>\n    </Styled.Column>\n  )\n}\n\nMenuBase.displayName = 'MenuBase'\n\nexport default MenuBase\n",
  "../../ExampleLayout.styled.ts": "import styled from 'styled-components'\n\nexport const Wrap = styled.div`\n  display: flex;\n  flex-wrap: wrap;\n`\n\nexport const Row = styled(Wrap)`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const SpaciousRow = styled(Wrap)`\n  & > * {\n    margin: 10px;\n  }\n`\n\nexport const InlineGroup = styled.div`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const Column = styled(InlineGroup)`\n  display: flex;\n  flex-direction: column;\n`\n\nexport const CenteredColumn = styled(Column)`\n  align-items: center;\n`\n\nexport const AppBarColumn = styled.div`\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  align-items: center;\n`\n\nexport const FieldGroups = styled(Wrap)`\n  & > *,\n  & > div > * {\n    margin: 10px;\n  }\n`\n"
}

const snippets = {
  MenuBase: {
    "MenuBase.tsx": sources["MenuBase.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  }
}

export default snippets
