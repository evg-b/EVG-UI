import React from 'react';
import { CodeExample } from '@evg-b/evg-tools';
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