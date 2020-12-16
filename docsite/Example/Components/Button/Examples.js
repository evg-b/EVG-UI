import React from 'react';
import { CodeExample } from '@evg-b/evg-ui';
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


const ButtonBaseExample = () => {
	return (
		<CodeExample
			title='Base'
			demo={<ButtonBase />}
			snippet={Snippets.ButtonBase}
		/>
	)
}

const ButtonColorExample = () => {
	return (
		<CodeExample
			title='Color'
			demo={<ButtonColor />}
			snippet={Snippets.ButtonColor}
		/>
	)
}

const ButtonElevationExample = () => {
	return (
		<CodeExample
			title='Elevation'
			demo={<ButtonElevation />}
			snippet={Snippets.ButtonElevation}
		/>
	)
}

const ButtonIconButtonExample = () => {
	return (
		<CodeExample
			title='Icon'
			demo={<ButtonIconButton />}
			snippet={Snippets.ButtonIconButton}
		/>
	)
}

const ButtonLoadingExample = () => {
	return (
		<CodeExample
			title='Loading'
			demo={<ButtonLoading />}
			snippet={Snippets.ButtonLoading}
		/>
	)
}

const ButtonRoundExample = () => {
	return (
		<CodeExample
			title='Round'
			demo={<ButtonRound />}
			snippet={Snippets.ButtonRound}
		/>
	)
}

const ButtonSizeExample = () => {
	return (
		<CodeExample
			title='Size'
			demo={<ButtonSize />}
			snippet={Snippets.ButtonSize}
		/>
	)
}

const ButtonStartIconAndEndIconExample = () => {
	return (
		<CodeExample
			title='StartIconAndEndIcon'
			demo={<ButtonStartIconAndEndIcon />}
			snippet={Snippets.ButtonStartIconAndEndIcon}
		/>
	)
}

const ButtonUppercaseExample = () => {
	return (
		<CodeExample
			title='Uppercase'
			demo={<ButtonUppercase />}
			snippet={Snippets.ButtonUppercase}
		/>
	)
}

const ButtonVariantExample = () => {
	return (
		<CodeExample
			title='Variant'
			demo={<ButtonVariant />}
			snippet={Snippets.ButtonVariant}
		/>
	)
}

export { 
	ButtonBaseExample,
ButtonColorExample,
ButtonElevationExample,
ButtonIconButtonExample,
ButtonLoadingExample,
ButtonRoundExample,
ButtonSizeExample,
ButtonStartIconAndEndIconExample,
ButtonUppercaseExample,
ButtonVariantExample,

}
