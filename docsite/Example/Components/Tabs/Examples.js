import React from 'react';
import { CodeExample } from '@evg-b/evg-tools';
import Snippets from './snippets'
import TabsBase from './TabsBase'


const TabsBaseExample = () => {
	return (
		<CodeExample
			title='Base'
			demo={<TabsBase />}
			snippet={Snippets.TabsBase}
		/>
	)
}



export {
    TabsBaseExample,
}