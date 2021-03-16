import React from 'react';
import { CodeExample } from '@evg-b/evg-tools';
import Snippets from './snippets'
import IconBase from './IconBase'
import IconColor from './IconColor'
import IconSize from './IconSize'


const IconBaseExample = () => {
	return (
		<CodeExample
			title='Base'
			demo={<IconBase />}
			snippet={Snippets.IconBase}
		/>
	)
}


const IconColorExample = () => {
	return (
		<CodeExample
			title='Color'
			demo={<IconColor />}
			snippet={Snippets.IconColor}
		/>
	)
}


const IconSizeExample = () => {
	return (
		<CodeExample
			title='Size'
			demo={<IconSize />}
			snippet={Snippets.IconSize}
		/>
	)
}



export {
    IconBaseExample,
IconColorExample,
IconSizeExample,
}