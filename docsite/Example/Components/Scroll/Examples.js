import React from 'react';
import { CodeExample } from '@evg-b/evg-ui';
import Snippets from './snippets'
import ScrollAutoHide from './ScrollAutoHide'
import ScrollBase from './ScrollBase'
import ScrollTrackSizeAndColor from './ScrollTrackSizeAndColor'
import ScrollVerticalAndHorizontal from './ScrollVerticalAndHorizontal'


const ScrollAutoHideExample = () => {
	return (
		<CodeExample
			title='AutoHide'
			demo={<ScrollAutoHide />}
			snippet={Snippets.ScrollAutoHide}
		/>
	)
}

const ScrollBaseExample = () => {
	return (
		<CodeExample
			title='Base'
			demo={<ScrollBase />}
			snippet={Snippets.ScrollBase}
		/>
	)
}

const ScrollTrackSizeAndColorExample = () => {
	return (
		<CodeExample
			title='TrackSizeAndColor'
			demo={<ScrollTrackSizeAndColor />}
			snippet={Snippets.ScrollTrackSizeAndColor}
		/>
	)
}

const ScrollVerticalAndHorizontalExample = () => {
	return (
		<CodeExample
			title='VerticalAndHorizontal'
			demo={<ScrollVerticalAndHorizontal />}
			snippet={Snippets.ScrollVerticalAndHorizontal}
		/>
	)
}

export { 
	ScrollAutoHideExample,
ScrollBaseExample,
ScrollTrackSizeAndColorExample,
ScrollVerticalAndHorizontalExample,

}
