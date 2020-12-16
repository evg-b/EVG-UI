import React from 'react';
import { CodeExample } from '@evg-b/evg-ui';
import Snippets from './snippets'
import TouchDriverBase from './TouchDriverBase'
import TouchDriverDirection from './TouchDriverDirection'
import TouchDriverInertia from './TouchDriverInertia'
import TouchDriverParams from './TouchDriverParams'


const TouchDriverBaseExample = () => {
	return (
		<CodeExample
			title='Base'
			demo={<TouchDriverBase />}
			snippet={Snippets.TouchDriverBase}
		/>
	)
}

const TouchDriverDirectionExample = () => {
	return (
		<CodeExample
			title='Direction'
			demo={<TouchDriverDirection />}
			snippet={Snippets.TouchDriverDirection}
		/>
	)
}

const TouchDriverInertiaExample = () => {
	return (
		<CodeExample
			title='Inertia'
			demo={<TouchDriverInertia />}
			snippet={Snippets.TouchDriverInertia}
		/>
	)
}

const TouchDriverParamsExample = () => {
	return (
		<CodeExample
			title='Params'
			demo={<TouchDriverParams />}
			snippet={Snippets.TouchDriverParams}
		/>
	)
}

export { 
	TouchDriverBaseExample,
TouchDriverDirectionExample,
TouchDriverInertiaExample,
TouchDriverParamsExample,

}
