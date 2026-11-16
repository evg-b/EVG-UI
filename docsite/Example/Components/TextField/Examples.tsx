import CodeExample from '../../../src/components/CodeExample/CodeExample'
import Snippets from './snippets'
import TextFieldBase from './TextFieldBase'
import TextFieldColor from './TextFieldColor'
import TextFieldError from './TextFieldError'
import TextFieldFullWidth from './TextFieldFullWidth'
import TextFieldHelperText from './TextFieldHelperText'
import TextFieldIcon from './TextFieldIcon'
import TextFieldMaxCount from './TextFieldMaxCount'
import TextFieldMultiline from './TextFieldMultiline'
import TextFieldOutlined from './TextFieldOutlined'
import TextFieldPlaceholderAndLabelText from './TextFieldPlaceholderAndLabelText'
import TextFieldRound from './TextFieldRound'

export const TextFieldBaseExample = () => (
  <CodeExample
    title="Base"
    demo={<TextFieldBase />}
    snippet={Snippets.TextFieldBase} />
)

TextFieldBaseExample.displayName = 'TextFieldBaseExample'

export const TextFieldColorExample = () => (
  <CodeExample
    title="Color"
    demo={<TextFieldColor />}
    snippet={Snippets.TextFieldColor} />
)

TextFieldColorExample.displayName = 'TextFieldColorExample'

export const TextFieldErrorExample = () => (
  <CodeExample
    title="Error"
    demo={<TextFieldError />}
    snippet={Snippets.TextFieldError} />
)

TextFieldErrorExample.displayName = 'TextFieldErrorExample'

export const TextFieldFullWidthExample = () => (
  <CodeExample
    title="FullWidth"
    demo={<TextFieldFullWidth />}
    snippet={Snippets.TextFieldFullWidth} />
)

TextFieldFullWidthExample.displayName = 'TextFieldFullWidthExample'

export const TextFieldHelperTextExample = () => (
  <CodeExample
    title="HelperText"
    demo={<TextFieldHelperText />}
    snippet={Snippets.TextFieldHelperText} />
)

TextFieldHelperTextExample.displayName = 'TextFieldHelperTextExample'

export const TextFieldIconExample = () => (
  <CodeExample
    title="Icon"
    demo={<TextFieldIcon />}
    snippet={Snippets.TextFieldIcon} />
)

TextFieldIconExample.displayName = 'TextFieldIconExample'

export const TextFieldMaxCountExample = () => (
  <CodeExample
    title="MaxCount"
    demo={<TextFieldMaxCount />}
    snippet={Snippets.TextFieldMaxCount} />
)

TextFieldMaxCountExample.displayName = 'TextFieldMaxCountExample'

export const TextFieldMultilineExample = () => (
  <CodeExample
    title="Multiline"
    demo={<TextFieldMultiline />}
    snippet={Snippets.TextFieldMultiline} />
)

TextFieldMultilineExample.displayName = 'TextFieldMultilineExample'

export const TextFieldOutlinedExample = () => (
  <CodeExample
    title="Outlined"
    demo={<TextFieldOutlined />}
    snippet={Snippets.TextFieldOutlined} />
)

TextFieldOutlinedExample.displayName = 'TextFieldOutlinedExample'

export const TextFieldPlaceholderAndLabelTextExample = () => (
  <CodeExample
    title="PlaceholderAndLabelText"
    demo={<TextFieldPlaceholderAndLabelText />}
    snippet={Snippets.TextFieldPlaceholderAndLabelText} />
)

TextFieldPlaceholderAndLabelTextExample.displayName = 'TextFieldPlaceholderAndLabelTextExample'

export const TextFieldRoundExample = () => (
  <CodeExample
    title="Round"
    demo={<TextFieldRound />}
    snippet={Snippets.TextFieldRound} />
)

TextFieldRoundExample.displayName = 'TextFieldRoundExample'
