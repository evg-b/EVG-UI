import React from 'react';
import { CodeExample } from '@evg-b/evg-ui';
import Snippets from './snippets'
import SwitchBase from './SwitchBase'
import SwitchColor from './SwitchColor'
import SwitchSize from './SwitchSize'
import SwitchVariant from './SwitchVariant'


const SwitchBaseExample = () => {
	return (
		<CodeExample
			title='Base'
			demo={<SwitchBase />}
			snippet={Snippets.SwitchBase}
		/>
	)
}

const SwitchColorExample = () => {
	return (
		<CodeExample
			title='Color'
			demo={<SwitchColor />}
			snippet={Snippets.SwitchColor}
		/>
	)
}

const SwitchSizeExample = () => {
	return (
		<CodeExample
			title='Size'
			demo={<SwitchSize />}
			snippet={Snippets.SwitchSize}
		/>
	)
}

const SwitchVariantExample = () => {
	return (
		<CodeExample
			title='Variant'
			demo={<SwitchVariant />}
			snippet={Snippets.SwitchVariant}
		/>
	)
}

export { 
	SwitchBaseExample,
SwitchColorExample,
SwitchSizeExample,
SwitchVariantExample,

}
