import React from 'react';
import { CodeExample } from '@evg-b/evg-ui';
import Snippets from './snippets'
import ButtonGroupBase from './ButtonGroupBase'
import ButtonGroupColor from './ButtonGroupColor'
import ButtonGroupOrientation from './ButtonGroupOrientation'
import ButtonGroupRound from './ButtonGroupRound'
import ButtonGroupSize from './ButtonGroupSize'
import ButtonGroupToggle from './ButtonGroupToggle'
import ButtonGroupUppercase from './ButtonGroupUppercase'
import ButtonGroupVariant from './ButtonGroupVariant'


const ButtonGroupBaseExample = () => {
	return (
		<CodeExample
			title='Base'
			demo={<ButtonGroupBase />}
			snippet={Snippets.ButtonGroupBase}
		/>
	)
}

const ButtonGroupColorExample = () => {
	return (
		<CodeExample
			title='Color'
			demo={<ButtonGroupColor />}
			snippet={Snippets.ButtonGroupColor}
		/>
	)
}

const ButtonGroupOrientationExample = () => {
	return (
		<CodeExample
			title='Orientation'
			demo={<ButtonGroupOrientation />}
			snippet={Snippets.ButtonGroupOrientation}
		/>
	)
}

const ButtonGroupRoundExample = () => {
	return (
		<CodeExample
			title='Round'
			demo={<ButtonGroupRound />}
			snippet={Snippets.ButtonGroupRound}
		/>
	)
}

const ButtonGroupSizeExample = () => {
	return (
		<CodeExample
			title='Size'
			demo={<ButtonGroupSize />}
			snippet={Snippets.ButtonGroupSize}
		/>
	)
}

const ButtonGroupToggleExample = () => {
	return (
		<CodeExample
			title='Toggle'
			demo={<ButtonGroupToggle />}
			snippet={Snippets.ButtonGroupToggle}
		/>
	)
}

const ButtonGroupUppercaseExample = () => {
	return (
		<CodeExample
			title='Uppercase'
			demo={<ButtonGroupUppercase />}
			snippet={Snippets.ButtonGroupUppercase}
		/>
	)
}

const ButtonGroupVariantExample = () => {
	return (
		<CodeExample
			title='Variant'
			demo={<ButtonGroupVariant />}
			snippet={Snippets.ButtonGroupVariant}
		/>
	)
}

export { 
	ButtonGroupBaseExample,
ButtonGroupColorExample,
ButtonGroupOrientationExample,
ButtonGroupRoundExample,
ButtonGroupSizeExample,
ButtonGroupToggleExample,
ButtonGroupUppercaseExample,
ButtonGroupVariantExample,

}
