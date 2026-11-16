import CodeExample from '../../../src/components/CodeExample/CodeExample'
import Snippets from './snippets'
import ButtonGroupBase from './ButtonGroupBase'
import ButtonGroupColor from './ButtonGroupColor'
import ButtonGroupIcon from './ButtonGroupIcon'
import ButtonGroupOrientation from './ButtonGroupOrientation'
import ButtonGroupRound from './ButtonGroupRound'
import ButtonGroupSize from './ButtonGroupSize'
import ButtonGroupUppercase from './ButtonGroupUppercase'
import ButtonGroupVariant from './ButtonGroupVariant'

export const ButtonGroupBaseExample = () => (
  <CodeExample
    title="Base"
    demo={<ButtonGroupBase />}
    snippet={Snippets.ButtonGroupBase} />
)

ButtonGroupBaseExample.displayName = 'ButtonGroupBaseExample'

export const ButtonGroupColorExample = () => (
  <CodeExample
    title="Color"
    demo={<ButtonGroupColor />}
    snippet={Snippets.ButtonGroupColor} />
)

ButtonGroupColorExample.displayName = 'ButtonGroupColorExample'

export const ButtonGroupIconExample = () => (
  <CodeExample
    title="Icon"
    demo={<ButtonGroupIcon />}
    snippet={Snippets.ButtonGroupIcon} />
)

ButtonGroupIconExample.displayName = 'ButtonGroupIconExample'

export const ButtonGroupOrientationExample = () => (
  <CodeExample
    title="Orientation"
    demo={<ButtonGroupOrientation />}
    snippet={Snippets.ButtonGroupOrientation} />
)

ButtonGroupOrientationExample.displayName = 'ButtonGroupOrientationExample'

export const ButtonGroupRoundExample = () => (
  <CodeExample
    title="Round"
    demo={<ButtonGroupRound />}
    snippet={Snippets.ButtonGroupRound} />
)

ButtonGroupRoundExample.displayName = 'ButtonGroupRoundExample'

export const ButtonGroupSizeExample = () => (
  <CodeExample
    title="Size"
    demo={<ButtonGroupSize />}
    snippet={Snippets.ButtonGroupSize} />
)

ButtonGroupSizeExample.displayName = 'ButtonGroupSizeExample'

export const ButtonGroupUppercaseExample = () => (
  <CodeExample
    title="Uppercase"
    demo={<ButtonGroupUppercase />}
    snippet={Snippets.ButtonGroupUppercase} />
)

ButtonGroupUppercaseExample.displayName = 'ButtonGroupUppercaseExample'

export const ButtonGroupVariantExample = () => (
  <CodeExample
    title="Variant"
    demo={<ButtonGroupVariant />}
    snippet={Snippets.ButtonGroupVariant} />
)

ButtonGroupVariantExample.displayName = 'ButtonGroupVariantExample'
