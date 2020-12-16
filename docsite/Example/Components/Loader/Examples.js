import React from 'react';
import { CodeExample } from '@evg-b/evg-ui';
import Snippets from './snippets'
import LoaderBase from './LoaderBase'
import LoaderColor from './LoaderColor'
import LoaderDepth from './LoaderDepth'
import LoaderSize from './LoaderSize'


const LoaderBaseExample = () => {
	return (
		<CodeExample
			title='Base'
			demo={<LoaderBase />}
			snippet={Snippets.LoaderBase}
		/>
	)
}

const LoaderColorExample = () => {
	return (
		<CodeExample
			title='Color'
			demo={<LoaderColor />}
			snippet={Snippets.LoaderColor}
		/>
	)
}

const LoaderDepthExample = () => {
	return (
		<CodeExample
			title='Depth'
			demo={<LoaderDepth />}
			snippet={Snippets.LoaderDepth}
		/>
	)
}

const LoaderSizeExample = () => {
	return (
		<CodeExample
			title='Size'
			demo={<LoaderSize />}
			snippet={Snippets.LoaderSize}
		/>
	)
}

export { 
	LoaderBaseExample,
LoaderColorExample,
LoaderDepthExample,
LoaderSizeExample,

}
