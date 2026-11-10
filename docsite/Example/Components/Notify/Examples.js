import React from 'react';
import CodeExample from '../../../src/components/CodeExample/CodeExample'
import Snippets from './snippets'
import NotifyBase from './NotifyBase'


const NotifyBaseExample = () => {
	return (
		<CodeExample
			title='Base'
			demo={<NotifyBase />}
			snippet={Snippets.NotifyBase}
		/>
	)
}



export {
    NotifyBaseExample,
}