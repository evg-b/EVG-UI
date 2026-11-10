import React from 'react';
import CodeExample from '../../../src/components/CodeExample/CodeExample'
import Snippets from './snippets'
import SliderBase from './SliderBase'


const SliderBaseExample = () => {
	return (
		<CodeExample
			title='Base'
			demo={<SliderBase />}
			snippet={Snippets.SliderBase}
		/>
	)
}



export {
    SliderBaseExample,
}