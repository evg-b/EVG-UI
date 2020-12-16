import React from 'react';
import { CodeExample } from '@evg-b/evg-ui';
import Snippets from './snippets'
import RippleBase from './RippleBase'
import RippleColor from './RippleColor'
import RippleContrast from './RippleContrast'


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
	RippleBaseExample,
RippleColorExample,
RippleContrastExample,

}
