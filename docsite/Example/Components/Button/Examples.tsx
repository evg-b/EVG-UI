import CodeExample from '../../../src/components/CodeExample/CodeExample'
import Snippets from './snippets'
import ButtonBase from './ButtonBase'
import ButtonColor from './ButtonColor'
import ButtonElevation from './ButtonElevation'
import ButtonIconButton from './ButtonIconButton'
import ButtonLoading from './ButtonLoading'
import ButtonRound from './ButtonRound'
import ButtonSize from './ButtonSize'
import ButtonStartIconAndEndIcon from './ButtonStartIconAndEndIcon'
import ButtonUppercase from './ButtonUppercase'
import ButtonVariant from './ButtonVariant'

export const ButtonBaseExample = () => (
  <CodeExample
    title="Base"
    demo={<ButtonBase />}
    snippet={Snippets.ButtonBase} />
)

ButtonBaseExample.displayName = 'ButtonBaseExample'

export const ButtonColorExample = () => (
  <CodeExample
    title="Color"
    demo={<ButtonColor />}
    snippet={Snippets.ButtonColor} />
)

ButtonColorExample.displayName = 'ButtonColorExample'

export const ButtonElevationExample = () => (
  <CodeExample
    title="Elevation"
    demo={<ButtonElevation />}
    snippet={Snippets.ButtonElevation} />
)

ButtonElevationExample.displayName = 'ButtonElevationExample'

export const ButtonIconButtonExample = () => (
  <CodeExample
    title="IconButton"
    demo={<ButtonIconButton />}
    snippet={Snippets.ButtonIconButton} />
)

ButtonIconButtonExample.displayName = 'ButtonIconButtonExample'

export const ButtonLoadingExample = () => (
  <CodeExample
    title="Loading"
    demo={<ButtonLoading />}
    snippet={Snippets.ButtonLoading} />
)

ButtonLoadingExample.displayName = 'ButtonLoadingExample'

export const ButtonRoundExample = () => (
  <CodeExample
    title="Round"
    demo={<ButtonRound />}
    snippet={Snippets.ButtonRound} />
)

ButtonRoundExample.displayName = 'ButtonRoundExample'

export const ButtonSizeExample = () => (
  <CodeExample
    title="Size"
    demo={<ButtonSize />}
    snippet={Snippets.ButtonSize} />
)

ButtonSizeExample.displayName = 'ButtonSizeExample'

export const ButtonStartIconAndEndIconExample = () => (
  <CodeExample
    title="StartIconAndEndIcon"
    demo={<ButtonStartIconAndEndIcon />}
    snippet={Snippets.ButtonStartIconAndEndIcon} />
)

ButtonStartIconAndEndIconExample.displayName = 'ButtonStartIconAndEndIconExample'

export const ButtonUppercaseExample = () => (
  <CodeExample
    title="Uppercase"
    demo={<ButtonUppercase />}
    snippet={Snippets.ButtonUppercase} />
)

ButtonUppercaseExample.displayName = 'ButtonUppercaseExample'

export const ButtonVariantExample = () => (
  <CodeExample
    title="Variant"
    demo={<ButtonVariant />}
    snippet={Snippets.ButtonVariant} />
)

ButtonVariantExample.displayName = 'ButtonVariantExample'
