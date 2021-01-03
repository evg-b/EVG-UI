import React from 'react';
import { CodeExample } from '@evg-b/evg-ui';
import Snippets from './snippets'
import AppBarBase from './AppBarBase'
import AppBarColor from './AppBarColor'
import AppBarLeftAndRight from './AppBarLeftAndRight'
import AppBarTitleCenter from './AppBarTitleCenter'


const AppBarBaseExample = () => {
	return (
		<CodeExample
			title='Base'
			demo={<AppBarBase />}
			snippet={Snippets.AppBarBase}
		/>
	)
}

const AppBarColorExample = () => {
	return (
		<CodeExample
			title='Color'
			demo={<AppBarColor />}
			snippet={Snippets.AppBarColor}
		/>
	)
}

const AppBarLeftAndRightExample = () => {
	return (
		<CodeExample
			title='LeftAndRight'
			demo={<AppBarLeftAndRight />}
			snippet={Snippets.AppBarLeftAndRight}
		/>
	)
}

const AppBarTitleCenterExample = () => {
	return (
		<CodeExample
			title='TitleCenter'
			demo={<AppBarTitleCenter />}
			snippet={Snippets.AppBarTitleCenter}
		/>
	)
}

export {
	AppBarBaseExample,
	AppBarColorExample,
	AppBarLeftAndRightExample,
	AppBarTitleCenterExample,

}
