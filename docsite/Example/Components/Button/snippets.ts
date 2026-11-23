const sources = {
  "ButtonBase.tsx": "import { Button } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst ButtonBase = () => {\n  return (\n    <Styled.Row>\n      <Button>text</Button>\n      <Button variant=\"contained\" color=\"primary\">\n        contained\n      </Button>\n      <Button variant=\"contained\" color=\"primary\" disabled>\n        disabled\n      </Button>\n      <Button variant=\"contained\" href=\"#base-button\">\n        Link\n      </Button>\n    </Styled.Row>\n  )\n}\n\nButtonBase.displayName = 'ButtonBase'\n\nexport default ButtonBase\n",
  "../../ExampleLayout.styled.ts": "import styled from 'styled-components'\n\nexport const Wrap = styled.div`\n  display: flex;\n  flex-wrap: wrap;\n`\n\nexport const Row = styled(Wrap)`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const SpaciousRow = styled(Wrap)`\n  & > * {\n    margin: 10px;\n  }\n`\n\nexport const InlineGroup = styled.div`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const Column = styled(InlineGroup)`\n  display: flex;\n  flex-direction: column;\n`\n\nexport const CenteredColumn = styled(Column)`\n  align-items: center;\n`\n\nexport const AppBarColumn = styled.div`\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  align-items: center;\n`\n\nexport const FieldGroups = styled(Wrap)`\n  & > *,\n  & > div > * {\n    margin: 10px;\n  }\n`\n",
  "ButtonColor.tsx": "import { Button } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst ButtonColor = () => {\n  return (\n    <Styled.Row>\n      <Button>text</Button>\n      <Button color=\"primary\">primary</Button>\n      <Button color=\"warn\">warn</Button>\n      <Button color=\"success\">success</Button>\n      <Button color=\"fail\">fail</Button>\n    </Styled.Row>\n  )\n}\n\nButtonColor.displayName = 'ButtonColor'\n\nexport default ButtonColor\n",
  "ButtonElevation.tsx": "import { Button } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst ButtonElevation = () => {\n  return (\n    <Styled.Row>\n      <Button variant=\"contained\" color=\"primary\">\n        elevation\n      </Button>\n      <Button variant=\"contained\" color=\"primary\" elevation={false}>\n        no elevation\n      </Button>\n    </Styled.Row>\n  )\n}\n\nButtonElevation.displayName = 'ButtonElevation'\n\nexport default ButtonElevation\n",
  "ButtonIconButton.tsx": "import { IconButton, Icon } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst ButtonIconButton = () => {\n  return (\n    <Styled.Row>\n      <IconButton aria-label=\"Закрыть\">\n        <Icon name=\"Close\" />\n      </IconButton>\n      <IconButton color=\"primary\" aria-label=\"Отменить\">\n        <Icon name=\"Cancel\" />\n      </IconButton>\n      <IconButton color=\"warn\" aria-label=\"Меню\">\n        <Icon name=\"Menu\" />\n      </IconButton>\n      <IconButton color=\"success\" aria-label=\"Во весь экран\">\n        <Icon name=\"Fullscreen\" />\n      </IconButton>\n      <IconButton disabled aria-label=\"Показать\">\n        <Icon name=\"Visibility\" />\n      </IconButton>\n    </Styled.Row>\n  )\n}\n\nButtonIconButton.displayName = 'ButtonIconButton'\n\nexport default ButtonIconButton\n",
  "ButtonLoading.tsx": "import { useState } from 'react'\nimport { Button, Icon } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst ButtonLoading = () => {\n  const [loading, setLoading] = useState<Array<boolean>>([])\n  const changeLoad = (index: number, state: boolean) => {\n    setLoading((l) => {\n      let newL = [...l]\n      newL[index] = state\n      return newL\n    })\n  }\n  const handleLoad = (index: number) => {\n    changeLoad(index, true)\n    setTimeout(() => changeLoad(index, false), 3000)\n  }\n  return (\n    <Styled.Row>\n      <Button\n        loading={loading[1]}\n        variant=\"contained\"\n        color=\"primary\"\n        startIcon={<Icon name=\"Check\" />}\n        onClick={() => handleLoad(1)}>\n        Click Me!\n      </Button>\n      <Button\n        loading={loading[2]}\n        variant=\"contained\"\n        color=\"primary\"\n        onClick={() => handleLoad(2)}>\n        And Me Me!\n      </Button>\n    </Styled.Row>\n  )\n}\n\nButtonLoading.displayName = 'ButtonLoading'\n\nexport default ButtonLoading\n",
  "ButtonRound.tsx": "import { Button } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst ButtonRound = () => {\n  return (\n    <Styled.Row>\n      <Button variant=\"text\" color=\"primary\" round>\n        default\n      </Button>\n      <Button variant=\"contained\" color=\"primary\" round>\n        contained\n      </Button>\n      <Button variant=\"outlined\" color=\"primary\" round>\n        outlined\n      </Button>\n    </Styled.Row>\n  )\n}\n\nButtonRound.displayName = 'ButtonRound'\n\nexport default ButtonRound\n",
  "ButtonSize.tsx": "import { Button } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst ButtonSize = () => {\n  return (\n    <Styled.Row>\n      <Button variant=\"contained\" color=\"primary\" size=\"small\">\n        small\n      </Button>\n      <Button variant=\"contained\" color=\"primary\" size=\"medium\">\n        medium\n      </Button>\n      <Button variant=\"contained\" color=\"primary\" size=\"large\">\n        large\n      </Button>\n      <Button variant=\"contained\" color=\"primary\" size=\"extra\">\n        extra\n      </Button>\n    </Styled.Row>\n  )\n}\n\nButtonSize.displayName = 'ButtonSize'\n\nexport default ButtonSize\n",
  "ButtonStartIconAndEndIcon.tsx": "import { Button, Icon } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst ButtonStartIconAndEndIcon = () => {\n  return (\n    <Styled.Row>\n      <Button startIcon={<Icon name=\"Check\" />}>default</Button>\n      <Button\n        variant=\"contained\"\n        color=\"primary\"\n        endIcon={<Icon name=\"Cancel\" />}>\n        Button\n      </Button>\n      <Button\n        variant=\"outlined\"\n        color=\"fail\"\n        round\n        startIcon={<Icon name=\"Check\" />}\n        endIcon={<Icon name=\"Cancel\" />}>\n        outlined\n      </Button>\n    </Styled.Row>\n  )\n}\n\nButtonStartIconAndEndIcon.displayName = 'ButtonStartIconAndEndIcon'\n\nexport default ButtonStartIconAndEndIcon\n",
  "ButtonUppercase.tsx": "import { Button } from '@evg-b/evg-ui'\n\nconst ButtonUppercase = () => {\n  return (\n    <Button variant=\"contained\" color=\"primary\" uppercase={false}>\n      Uppercase\n    </Button>\n  )\n}\n\nButtonUppercase.displayName = 'ButtonUppercase'\n\nexport default ButtonUppercase\n",
  "ButtonVariant.tsx": "import { Button } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst ButtonVariant = () => {\n  return (\n    <Styled.Row>\n      <Button variant=\"text\" color=\"primary\">\n        default\n      </Button>\n      <Button variant=\"contained\" color=\"primary\">\n        Button\n      </Button>\n      <Button variant=\"outlined\" color=\"primary\">\n        outlined\n      </Button>\n    </Styled.Row>\n  )\n}\n\nButtonVariant.displayName = 'ButtonVariant'\n\nexport default ButtonVariant\n"
}

const snippets = {
  ButtonBase: {
    "ButtonBase.tsx": sources["ButtonBase.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  ButtonColor: {
    "ButtonColor.tsx": sources["ButtonColor.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  ButtonElevation: {
    "ButtonElevation.tsx": sources["ButtonElevation.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  ButtonIconButton: {
    "ButtonIconButton.tsx": sources["ButtonIconButton.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  ButtonLoading: {
    "ButtonLoading.tsx": sources["ButtonLoading.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  ButtonRound: {
    "ButtonRound.tsx": sources["ButtonRound.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  ButtonSize: {
    "ButtonSize.tsx": sources["ButtonSize.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  ButtonStartIconAndEndIcon: {
    "ButtonStartIconAndEndIcon.tsx": sources["ButtonStartIconAndEndIcon.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  ButtonUppercase: {
    "ButtonUppercase.tsx": sources["ButtonUppercase.tsx"]
  },
  ButtonVariant: {
    "ButtonVariant.tsx": sources["ButtonVariant.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  }
}

export default snippets
