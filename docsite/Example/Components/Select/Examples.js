import React from 'react';
import { CodeExample } from '@evg-b/evg-ui';
import Snippets from './snippets'
import SelectBase from './SelectBase'
import SelectColor from './SelectColor'
import SelectEmptyOption from './SelectEmptyOption'


const SelectBaseExample = () => {
	return (
		<CodeExample
			title='Base'
			demo={<SelectBase />}
			snippet={Snippets.SelectBase}
		/>
	)
}

const SelectColorExample = () => {
	return (
		<CodeExample
			title='Color'
			demo={<SelectColor />}
			snippet={Snippets.SelectColor}
		/>
	)
}

const SelectEmptyOptionExample = () => {
	return (
		<CodeExample
			title='EmptyOption'
			demo={<SelectEmptyOption />}
			snippet={Snippets.SelectEmptyOption}
		/>
	)
}

export { 
	SelectBaseExample,
SelectColorExample,
SelectEmptyOptionExample,

}
