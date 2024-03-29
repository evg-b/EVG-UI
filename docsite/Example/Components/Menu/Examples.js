import React from 'react';
import { CodeExample } from '@evg-b/evg-tools';
import Snippets from './snippets'
import MenuBase from './MenuBase'


const MenuBaseExample = () => {
	return (
		<CodeExample
			title='Base'
			demo={<MenuBase />}
			snippet={Snippets.MenuBase}
		/>
	)
}



export {
    MenuBaseExample,
}