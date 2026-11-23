const sources = {
  "AppBarBase.tsx": "import { AppBar } from '@evg-b/evg-ui'\n\nconst AppBarBase = () => {\n  return <AppBar title=\"EVG-UI\" color=\"primary\" position=\"static\" />\n}\n\nAppBarBase.displayName = 'AppBarBase'\n\nexport default AppBarBase\n",
  "AppBarColor.tsx": "import type { ChangeEvent } from 'react'\n\nimport { useState } from 'react'\nimport { AppBar, Radio } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst AppBarColor = () => {\n  const [color, setColor] = useState('default')\n\n  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {\n    setColor(e.target.name)\n  }\n\n  return (\n    <Styled.AppBarColumn>\n      <AppBar title=\"EVG-UI Color\" color={color} position=\"static\" />\n      <div>\n        <Radio\n          onChange={handleChange}\n          checked={color === 'default'}\n          name=\"default\"\n          color=\"default\"\n        />\n        <Radio\n          onChange={handleChange}\n          checked={color === 'red700'}\n          name=\"red700\"\n          color=\"red700\"\n        />\n        <Radio\n          onChange={handleChange}\n          checked={color === 'primary'}\n          name=\"primary\"\n          color=\"primary\"\n        />\n      </div>\n    </Styled.AppBarColumn>\n  )\n}\n\nAppBarColor.displayName = 'AppBarColor'\n\nexport default AppBarColor\n",
  "../../ExampleLayout.styled.ts": "import styled from 'styled-components'\n\nexport const Wrap = styled.div`\n  display: flex;\n  flex-wrap: wrap;\n`\n\nexport const Row = styled(Wrap)`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const SpaciousRow = styled(Wrap)`\n  & > * {\n    margin: 10px;\n  }\n`\n\nexport const InlineGroup = styled.div`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const Column = styled(InlineGroup)`\n  display: flex;\n  flex-direction: column;\n`\n\nexport const CenteredColumn = styled(Column)`\n  align-items: center;\n`\n\nexport const AppBarColumn = styled.div`\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  align-items: center;\n`\n\nexport const FieldGroups = styled(Wrap)`\n  & > *,\n  & > div > * {\n    margin: 10px;\n  }\n`\n",
  "AppBarLeftAndRight.tsx": "import { AppBar, IconButton, Icon } from '@evg-b/evg-ui'\n\nconst AppBarLeftAndRight = () => {\n  return (\n    <AppBar\n      title=\"EVG-UI left/right\"\n      position=\"static\"\n      color=\"primary\"\n      left={\n        <IconButton>\n          <Icon name=\"Menu\" />\n        </IconButton>\n      }\n      right={\n        <>\n          <IconButton>\n            <Icon name=\"Fullscreen\" />\n          </IconButton>\n          <IconButton>\n            <Icon name=\"MoreVert\" />\n          </IconButton>\n        </>\n      }\n    />\n  )\n}\n\nAppBarLeftAndRight.displayName = 'AppBarLeftAndRight'\n\nexport default AppBarLeftAndRight\n",
  "AppBarTitleCenter.tsx": "import { AppBar, IconButton, Icon } from '@evg-b/evg-ui'\n\nconst AppBarTitleCenter = () => {\n  return (\n    <AppBar\n      title=\"EVG-UI\"\n      position=\"static\"\n      color=\"primary\"\n      titleCenter\n      left={\n        <IconButton>\n          <Icon name=\"Menu\" />\n        </IconButton>\n      }\n    />\n  )\n}\n\nAppBarTitleCenter.displayName = 'AppBarTitleCenter'\n\nexport default AppBarTitleCenter\n"
}

const snippets = {
  AppBarBase: {
    "AppBarBase.tsx": sources["AppBarBase.tsx"]
  },
  AppBarColor: {
    "AppBarColor.tsx": sources["AppBarColor.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  AppBarLeftAndRight: {
    "AppBarLeftAndRight.tsx": sources["AppBarLeftAndRight.tsx"]
  },
  AppBarTitleCenter: {
    "AppBarTitleCenter.tsx": sources["AppBarTitleCenter.tsx"]
  }
}

export default snippets
