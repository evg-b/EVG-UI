const sources = {
  "ButtonGroupBase.tsx": "import { Button, ButtonGroup } from '@evg-b/evg-ui'\n\nconst ButtonGroupBase = () => {\n  return (\n    <ButtonGroup variant=\"contained\" color=\"primary\">\n      <Button>Button 1</Button>\n      <Button>Button 2</Button>\n      <Button>Button 3</Button>\n    </ButtonGroup>\n  )\n}\n\nButtonGroupBase.displayName = 'ButtonGroupBase'\n\nexport default ButtonGroupBase\n",
  "ButtonGroupColor.tsx": "import { Button, ButtonGroup } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst ButtonGroupColor = () => {\n  return (\n    <Styled.CenteredColumn>\n      <ButtonGroup variant=\"text\" color=\"primary\">\n        <Button>primary 1</Button>\n        <Button>primary 2</Button>\n      </ButtonGroup>\n      <ButtonGroup variant=\"contained\" color=\"success\">\n        <Button>success 1</Button>\n        <Button>success 2</Button>\n      </ButtonGroup>\n      <ButtonGroup variant=\"outlined\" color=\"fail\">\n        <Button>fail 1</Button>\n        <Button>fail 2</Button>\n      </ButtonGroup>\n    </Styled.CenteredColumn>\n  )\n}\n\nButtonGroupColor.displayName = 'ButtonGroupColor'\n\nexport default ButtonGroupColor\n",
  "../../ExampleLayout.styled.ts": "import styled from 'styled-components'\n\nexport const Wrap = styled.div`\n  display: flex;\n  flex-wrap: wrap;\n`\n\nexport const Row = styled(Wrap)`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const SpaciousRow = styled(Wrap)`\n  & > * {\n    margin: 10px;\n  }\n`\n\nexport const InlineGroup = styled.div`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const Column = styled(InlineGroup)`\n  display: flex;\n  flex-direction: column;\n`\n\nexport const CenteredColumn = styled(Column)`\n  align-items: center;\n`\n\nexport const AppBarColumn = styled.div`\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  align-items: center;\n`\n\nexport const FieldGroups = styled(Wrap)`\n  & > *,\n  & > div > * {\n    margin: 10px;\n  }\n`\n",
  "ButtonGroupIcon.tsx": "import { Button, ButtonGroup, Icon } from '@evg-b/evg-ui'\n\nconst ButtonGroupIcon = () => {\n  return (\n    <ButtonGroup>\n      <Button>\n        <Icon name=\"Menu\" />\n      </Button>\n      <Button>\n        <Icon name=\"Close\" />\n      </Button>\n      <Button>\n        <Icon name=\"Notifications\" />\n      </Button>\n    </ButtonGroup>\n  )\n}\n\nButtonGroupIcon.displayName = 'ButtonGroupIcon'\n\nexport default ButtonGroupIcon\n",
  "ButtonGroupOrientation.tsx": "import { Button, ButtonGroup } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst ButtonGroupOrientation = () => {\n  return (\n    <Styled.CenteredColumn>\n      <ButtonGroup orientation=\"horizontal\" variant=\"contained\" color=\"primary\">\n        <Button>horizont 1</Button>\n        <Button>horizont 2</Button>\n      </ButtonGroup>\n      <ButtonGroup orientation=\"vertical\" variant=\"contained\" color=\"primary\">\n        <Button>vertical 1</Button>\n        <Button>vertical 2</Button>\n      </ButtonGroup>\n    </Styled.CenteredColumn>\n  )\n}\n\nButtonGroupOrientation.displayName = 'ButtonGroupOrientation'\n\nexport default ButtonGroupOrientation\n",
  "ButtonGroupRound.tsx": "import { Button, ButtonGroup } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst ButtonGroupRound = () => {\n  return (\n    <Styled.CenteredColumn>\n      <ButtonGroup round variant=\"text\" color=\"primary\">\n        <Button>primary 1</Button>\n        <Button>primary 2</Button>\n      </ButtonGroup>\n      <ButtonGroup round variant=\"contained\" color=\"success\">\n        <Button>success 1</Button>\n        <Button>success 2</Button>\n      </ButtonGroup>\n      <ButtonGroup round variant=\"outlined\" color=\"fail\">\n        <Button>fail 1</Button>\n        <Button>fail 2</Button>\n      </ButtonGroup>\n    </Styled.CenteredColumn>\n  )\n}\n\nButtonGroupRound.displayName = 'ButtonGroupRound'\n\nexport default ButtonGroupRound\n",
  "ButtonGroupSize.tsx": "import { Button, ButtonGroup } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst ButtonGroupSize = () => {\n  return (\n    <Styled.CenteredColumn>\n      <ButtonGroup size=\"small\" variant=\"contained\" color=\"primary\">\n        <Button>small 1</Button>\n        <Button>small 2</Button>\n        <Button>small 3</Button>\n      </ButtonGroup>\n      <ButtonGroup variant=\"contained\" color=\"primary\">\n        <Button>medium 1</Button>\n        <Button>medium 2</Button>\n        <Button>medium 3</Button>\n      </ButtonGroup>\n      <ButtonGroup size=\"large\" variant=\"contained\" color=\"primary\">\n        <Button>large 1</Button>\n        <Button>large 2</Button>\n        <Button>large 3</Button>\n      </ButtonGroup>\n    </Styled.CenteredColumn>\n  )\n}\n\nButtonGroupSize.displayName = 'ButtonGroupSize'\n\nexport default ButtonGroupSize\n",
  "ButtonGroupUppercase.tsx": "import { Button, ButtonGroup } from '@evg-b/evg-ui'\n\nconst ButtonGroupUppercase = () => {\n  return (\n    <ButtonGroup uppercase={false}>\n      <Button>Text 1</Button>\n      <Button>Text 2</Button>\n      <Button>Text 3</Button>\n    </ButtonGroup>\n  )\n}\n\nButtonGroupUppercase.displayName = 'ButtonGroupUppercase'\n\nexport default ButtonGroupUppercase\n",
  "ButtonGroupVariant.tsx": "import { Button, ButtonGroup } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst ButtonGroupVariant = () => {\n  return (\n    <Styled.CenteredColumn>\n      <ButtonGroup variant=\"text\">\n        <Button>default 1</Button>\n        <Button>default 2</Button>\n        <Button>default 3</Button>\n      </ButtonGroup>\n      <ButtonGroup variant=\"contained\" color=\"primary\">\n        <Button>contained 1</Button>\n        <Button>contained 2</Button>\n        <Button>contained 3</Button>\n      </ButtonGroup>\n      <ButtonGroup variant=\"outlined\" color=\"primary\">\n        <Button>outlined 1</Button>\n        <Button>outlined 2</Button>\n        <Button>outlined 3</Button>\n      </ButtonGroup>\n    </Styled.CenteredColumn>\n  )\n}\n\nButtonGroupVariant.displayName = 'ButtonGroupVariant'\n\nexport default ButtonGroupVariant\n"
}

const snippets = {
  ButtonGroupBase: {
    "ButtonGroupBase.tsx": sources["ButtonGroupBase.tsx"]
  },
  ButtonGroupColor: {
    "ButtonGroupColor.tsx": sources["ButtonGroupColor.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  ButtonGroupIcon: {
    "ButtonGroupIcon.tsx": sources["ButtonGroupIcon.tsx"]
  },
  ButtonGroupOrientation: {
    "ButtonGroupOrientation.tsx": sources["ButtonGroupOrientation.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  ButtonGroupRound: {
    "ButtonGroupRound.tsx": sources["ButtonGroupRound.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  ButtonGroupSize: {
    "ButtonGroupSize.tsx": sources["ButtonGroupSize.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  ButtonGroupUppercase: {
    "ButtonGroupUppercase.tsx": sources["ButtonGroupUppercase.tsx"]
  },
  ButtonGroupVariant: {
    "ButtonGroupVariant.tsx": sources["ButtonGroupVariant.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  }
}

export default snippets
