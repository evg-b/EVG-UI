import React from 'react';
import { CodeExample } from '@evg-b/evg-tools';
import Snippets from './snippets'
import RadioBase from './RadioBase'
import RadioColor from './RadioColor'
import RadioSize from './RadioSize'


const RadioBaseExample = () => {
	return (
		<CodeExample
			title='Base'
			demo={<RadioBase />}
			snippet={Snippets.RadioBase}
		/>
	)
}


const RadioColorExample = () => {
	return (
		<CodeExample
			title='Color'
			demo={<RadioColor />}
			snippet={Snippets.RadioColor}
		/>
	)
}


const RadioSizeExample = () => {
	return (
		<CodeExample
			title='Size'
			demo={<RadioSize />}
			snippet={Snippets.RadioSize}
		/>
	)
}



export {
    RadioBaseExample,
RadioColorExample,
RadioSizeExample,
}