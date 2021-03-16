import React from 'react';
import { CodeExample } from '@evg-b/evg-tools';
import Snippets from './snippets'
import LightboxBase from './LightboxBase'


const LightboxBaseExample = () => {
	return (
		<CodeExample
			title='Base'
			demo={<LightboxBase />}
			snippet={Snippets.LightboxBase}
		/>
	)
}



export {
    LightboxBaseExample,
}