const sources = {
  "TextFieldBase.tsx": "import { TextField } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst TextFieldBase = () => {\n  return (\n    <Styled.Row>\n      <TextField labelText=\"Base TextField\" placeholder=\"placeholder\" />\n      <TextField\n        disabled\n        labelText=\"Disabled\"\n        placeholder=\"placeholder\"\n        value=\"Disabled\"\n      />\n    </Styled.Row>\n  )\n}\n\nTextFieldBase.displayName = 'TextFieldBase'\n\nexport default TextFieldBase\n",
  "../../ExampleLayout.styled.ts": "import styled from 'styled-components'\n\nexport const Wrap = styled.div`\n  display: flex;\n  flex-wrap: wrap;\n`\n\nexport const Row = styled(Wrap)`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const SpaciousRow = styled(Wrap)`\n  & > * {\n    margin: 10px;\n  }\n`\n\nexport const InlineGroup = styled.div`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const Column = styled(InlineGroup)`\n  display: flex;\n  flex-direction: column;\n`\n\nexport const CenteredColumn = styled(Column)`\n  align-items: center;\n`\n\nexport const AppBarColumn = styled.div`\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  align-items: center;\n`\n\nexport const FieldGroups = styled(Wrap)`\n  & > *,\n  & > div > * {\n    margin: 10px;\n  }\n`\n",
  "TextFieldColor.tsx": "import { TextField } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst TextFieldColor = () => {\n  return (\n    <Styled.Row>\n      <TextField\n        color=\"primary\"\n        labelText=\"primary\"\n        placeholder=\"placeholder\"\n      />\n      <TextField\n        color=\"fail\"\n        labelText=\"fail\"\n        placeholder=\"placeholder\"\n        outlined\n      />\n    </Styled.Row>\n  )\n}\n\nTextFieldColor.displayName = 'TextFieldColor'\n\nexport default TextFieldColor\n",
  "TextFieldError.tsx": "import { TextField } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst TextFieldError = () => {\n  return (\n    <Styled.Row>\n      <TextField\n        error\n        helperText=\"Error helper text\"\n        labelText=\"Error\"\n        placeholder=\"placeholder\"\n        color=\"primary\"\n        value=\"Error\"\n      />\n      <TextField\n        error\n        outlined\n        labelText=\"Error\"\n        placeholder=\"placeholder\"\n        color=\"primary\"\n        value=\"Error\"\n      />\n    </Styled.Row>\n  )\n}\n\nTextFieldError.displayName = 'TextFieldError'\n\nexport default TextFieldError\n",
  "TextFieldFullWidth.tsx": "import { TextField } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst TextFieldFullWidth = () => {\n  return (\n    <Styled.Row>\n      <TextField\n        fullWidth\n        labelText=\"multiline fullWidth\"\n        placeholder=\"placeholder\"\n        color=\"primary\"\n      />\n      <TextField\n        fullWidth\n        labelText=\"multiline fullWidth\"\n        placeholder=\"placeholder\"\n        color=\"primary\"\n        outlined\n      />\n    </Styled.Row>\n  )\n}\n\nTextFieldFullWidth.displayName = 'TextFieldFullWidth'\n\nexport default TextFieldFullWidth\n",
  "TextFieldHelperText.tsx": "import { TextField } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst TextFieldHelperText = () => {\n  return (\n    <Styled.Row>\n      <TextField\n        helperText=\"helperText\"\n        labelText=\"helperText\"\n        placeholder=\"placeholder\"\n        color=\"primary\"\n      />\n    </Styled.Row>\n  )\n}\n\nTextFieldHelperText.displayName = 'TextFieldHelperText'\n\nexport default TextFieldHelperText\n",
  "TextFieldIcon.tsx": "import { TextField, Icon } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst TextFieldIcon = () => {\n  return (\n    <Styled.FieldGroups>\n      <div>\n        <TextField\n          leadingIcon={<Icon name=\"Check\" />}\n          labelText=\"TextField\"\n          placeholder=\"placeholder\"\n          color=\"primary\"\n        />\n        <TextField\n          trailingIcon={<Icon name=\"Close\" />}\n          labelText=\"TextField\"\n          placeholder=\"placeholder\"\n          color=\"primary\"\n        />\n        <TextField\n          leadingIcon={<Icon name=\"Check\" />}\n          trailingIcon={<Icon name=\"Close\" />}\n          labelText=\"TextField\"\n          placeholder=\"placeholder\"\n          color=\"primary\"\n        />\n      </div>\n      <div>\n        <TextField\n          leadingIcon={<Icon name=\"Check\" />}\n          labelText=\"TextField outlined\"\n          placeholder=\"placeholder\"\n          color=\"primary\"\n          outlined\n        />\n        <TextField\n          trailingIcon={<Icon name=\"Close\" />}\n          labelText=\"TextField outlined\"\n          placeholder=\"placeholder\"\n          color=\"primary\"\n          outlined\n        />\n        <TextField\n          leadingIcon={<Icon name=\"Check\" />}\n          trailingIcon={<Icon name=\"Close\" />}\n          labelText=\"TextField outlined\"\n          placeholder=\"placeholder\"\n          color=\"primary\"\n          outlined\n        />\n      </div>\n    </Styled.FieldGroups>\n  )\n}\n\nTextFieldIcon.displayName = 'TextFieldIcon'\n\nexport default TextFieldIcon\n",
  "TextFieldMaxCount.tsx": "import { TextField } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst TextFieldMaxCount = () => {\n  return (\n    <Styled.Row>\n      <TextField\n        maxCount={5}\n        helperText=\"maxCount\"\n        labelText=\"maxCount\"\n        placeholder=\"placeholder\"\n        color=\"primary\"\n      />\n    </Styled.Row>\n  )\n}\n\nTextFieldMaxCount.displayName = 'TextFieldMaxCount'\n\nexport default TextFieldMaxCount\n",
  "TextFieldMultiline.tsx": "import { TextField } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst TextFieldMultiline = () => {\n  return (\n    <Styled.FieldGroups>\n      <div>\n        <TextField\n          multiline\n          labelText=\"multiline base\"\n          placeholder=\"placeholder\"\n          color=\"primary\"\n        />\n        <TextField\n          rows={4}\n          multiline\n          labelText=\"multiline base\"\n          placeholder=\"placeholder\"\n          color=\"primary\"\n        />\n      </div>\n      <div>\n        <TextField\n          multiline\n          labelText=\"multiline outlined\"\n          placeholder=\"placeholder\"\n          color=\"primary\"\n          outlined\n        />\n        <TextField\n          rows={4}\n          multiline\n          labelText=\"multiline outlined\"\n          placeholder=\"placeholder\"\n          color=\"primary\"\n          outlined\n        />\n      </div>\n    </Styled.FieldGroups>\n  )\n}\n\nTextFieldMultiline.displayName = 'TextFieldMultiline'\n\nexport default TextFieldMultiline\n",
  "TextFieldOutlined.tsx": "import { TextField } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst TextFieldOutlined = () => {\n  return (\n    <Styled.Row>\n      <TextField labelText=\"Outlined\" placeholder=\"Outlined\" outlined />\n      <TextField\n        disabled\n        labelText=\"Disabled\"\n        placeholder=\"Outlined\"\n        outlined\n        value=\"Disabled\"\n      />\n    </Styled.Row>\n  )\n}\n\nTextFieldOutlined.displayName = 'TextFieldOutlined'\n\nexport default TextFieldOutlined\n",
  "TextFieldPlaceholderAndLabelText.tsx": "import { TextField } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst TextFieldPlaceholderAndLabelText = () => {\n  return (\n    <Styled.Row>\n      <TextField />\n      <TextField labelText=\"labelText\" />\n      <TextField placeholder=\"placeholder\" />\n    </Styled.Row>\n  )\n}\n\nTextFieldPlaceholderAndLabelText.displayName =\n  'TextFieldPlaceholderAndLabelText'\n\nexport default TextFieldPlaceholderAndLabelText\n",
  "TextFieldRound.tsx": "import { TextField } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst TextFieldRound = () => {\n  return (\n    <Styled.Row>\n      <TextField\n        round\n        labelText=\"round base\"\n        placeholder=\"placeholder\"\n        color=\"primary\"\n      />\n      <TextField\n        round\n        labelText=\"round outlined\"\n        placeholder=\"placeholder\"\n        color=\"primary\"\n        outlined\n      />\n    </Styled.Row>\n  )\n}\n\nTextFieldRound.displayName = 'TextFieldRound'\n\nexport default TextFieldRound\n"
}

const snippets = {
  TextFieldBase: {
    "TextFieldBase.tsx": sources["TextFieldBase.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  TextFieldColor: {
    "TextFieldColor.tsx": sources["TextFieldColor.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  TextFieldError: {
    "TextFieldError.tsx": sources["TextFieldError.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  TextFieldFullWidth: {
    "TextFieldFullWidth.tsx": sources["TextFieldFullWidth.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  TextFieldHelperText: {
    "TextFieldHelperText.tsx": sources["TextFieldHelperText.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  TextFieldIcon: {
    "TextFieldIcon.tsx": sources["TextFieldIcon.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  TextFieldMaxCount: {
    "TextFieldMaxCount.tsx": sources["TextFieldMaxCount.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  TextFieldMultiline: {
    "TextFieldMultiline.tsx": sources["TextFieldMultiline.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  TextFieldOutlined: {
    "TextFieldOutlined.tsx": sources["TextFieldOutlined.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  TextFieldPlaceholderAndLabelText: {
    "TextFieldPlaceholderAndLabelText.tsx": sources["TextFieldPlaceholderAndLabelText.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  TextFieldRound: {
    "TextFieldRound.tsx": sources["TextFieldRound.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  }
}

export default snippets
