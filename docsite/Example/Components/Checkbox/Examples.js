import React from 'react';
import { CodeExample } from '@evg-b/evg-tools';
import Snippets from './snippets'
import CheckboxBase from './CheckboxBase'
import CheckboxColor from './CheckboxColor'
import CheckboxSize from './CheckboxSize'


const CheckboxBaseExample = () => {
	return (
		<CodeExample
			title='Base'
			demo={<CheckboxBase />}
			snippet={Snippets.CheckboxBase}
		/>
	)
}


const CheckboxColorExample = () => {
	return (
		<CodeExample
			title='Color'
			demo={<CheckboxColor />}
			snippet={Snippets.CheckboxColor}
		/>
	)
}


const CheckboxSizeExample = () => {
	return (
		<CodeExample
			title='Size'
			demo={<CheckboxSize />}
			snippet={Snippets.CheckboxSize}
		/>
	)
}



export {
    CheckboxBaseExample,
CheckboxColorExample,
CheckboxSizeExample,
}