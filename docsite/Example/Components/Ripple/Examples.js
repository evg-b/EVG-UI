import React from 'react';
import { CodeExample } from '@evg-b/evg-tools';
import Snippets from './snippets'
import custom_state from './custom_state'
import RippleBase from './RippleBase'
import RippleColor from './RippleColor'
import RippleContrast from './RippleContrast'


const custom_stateExample = () => {
	return (
		<CodeExample
			title='custom_state'
			demo={<custom_state />}
			snippet={Snippets.custom_state}
		/>
	)
}


const RippleBaseExample = () => {
	return (
		<CodeExample
			title='Base'
			demo={<RippleBase />}
			snippet={Snippets.RippleBase}
		/>
	)
}


const RippleColorExample = () => {
	return (
		<CodeExample
			title='Color'
			demo={<RippleColor />}
			snippet={Snippets.RippleColor}
		/>
	)
}


const RippleContrastExample = () => {
	return (
		<CodeExample
			title='Contrast'
			demo={<RippleContrast />}
			snippet={Snippets.RippleContrast}
		/>
	)
}



export {
    custom_stateExample,
RippleBaseExample,
RippleColorExample,
RippleContrastExample,
}