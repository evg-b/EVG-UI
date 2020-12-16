import React from 'react';
import { CodeExample } from '@evg-b/evg-ui';
import Snippets from './snippets'
import TooltipAnimation from './TooltipAnimation'
import TooltipAutoHide from './TooltipAutoHide'
import TooltipBase from './TooltipBase'
import TooltipPosition from './TooltipPosition'


const TooltipAnimationExample = () => {
	return (
		<CodeExample
			title='Animation'
			demo={<TooltipAnimation />}
			snippet={Snippets.TooltipAnimation}
		/>
	)
}

const TooltipAutoHideExample = () => {
	return (
		<CodeExample
			title='AutoHide'
			demo={<TooltipAutoHide />}
			snippet={Snippets.TooltipAutoHide}
		/>
	)
}

const TooltipBaseExample = () => {
	return (
		<CodeExample
			title='Base'
			demo={<TooltipBase />}
			snippet={Snippets.TooltipBase}
		/>
	)
}

const TooltipPositionExample = () => {
	return (
		<CodeExample
			title='Position'
			demo={<TooltipPosition />}
			snippet={Snippets.TooltipPosition}
		/>
	)
}

export { 
	TooltipAnimationExample,
TooltipAutoHideExample,
TooltipBaseExample,
TooltipPositionExample,

}
