import React from 'react';
import { CodeExample } from '@evg-b/evg-ui';
import Snippets from './snippets'
import PopupAnimation from './PopupAnimation'
import PopupAutoHide from './PopupAutoHide'
import PopupBase from './PopupBase'
import PopupMode from './PopupMode'
import PopupPosition from './PopupPosition'
import PopupScrollable from './PopupScrollable'
import PopupShift from './PopupShift'


const PopupAnimationExample = () => {
	return (
		<CodeExample
			title='Animation'
			demo={<PopupAnimation />}
			snippet={Snippets.PopupAnimation}
		/>
	)
}

const PopupAutoHideExample = () => {
	return (
		<CodeExample
			title='AutoHide'
			demo={<PopupAutoHide />}
			snippet={Snippets.PopupAutoHide}
		/>
	)
}

const PopupBaseExample = () => {
	return (
		<CodeExample
			title='Base'
			demo={<PopupBase />}
			snippet={Snippets.PopupBase}
		/>
	)
}

const PopupModeExample = () => {
	return (
		<CodeExample
			title='Mode'
			demo={<PopupMode />}
			snippet={Snippets.PopupMode}
		/>
	)
}

const PopupPositionExample = () => {
	return (
		<CodeExample
			title='Position'
			demo={<PopupPosition />}
			snippet={Snippets.PopupPosition}
		/>
	)
}

const PopupScrollableExample = () => {
	return (
		<CodeExample
			title='Scrollable'
			demo={<PopupScrollable />}
			snippet={Snippets.PopupScrollable}
		/>
	)
}

const PopupShiftExample = () => {
	return (
		<CodeExample
			title='Shift'
			demo={<PopupShift />}
			snippet={Snippets.PopupShift}
		/>
	)
}

export { 
	PopupAnimationExample,
PopupAutoHideExample,
PopupBaseExample,
PopupModeExample,
PopupPositionExample,
PopupScrollableExample,
PopupShiftExample,

}
