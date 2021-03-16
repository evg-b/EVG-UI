import React from 'react';
import { CodeExample } from '@evg-b/evg-tools';
import Snippets from './snippets'
import BadgeBase from './BadgeBase'
import BadgeCircle from './BadgeCircle'
import BadgeColor from './BadgeColor'
import BadgeDot from './BadgeDot'
import BadgeMax from './BadgeMax'
import BadgeRipe from './BadgeRipe'


const BadgeBaseExample = () => {
	return (
		<CodeExample
			title='Base'
			demo={<BadgeBase />}
			snippet={Snippets.BadgeBase}
		/>
	)
}


const BadgeCircleExample = () => {
	return (
		<CodeExample
			title='Circle'
			demo={<BadgeCircle />}
			snippet={Snippets.BadgeCircle}
		/>
	)
}


const BadgeColorExample = () => {
	return (
		<CodeExample
			title='Color'
			demo={<BadgeColor />}
			snippet={Snippets.BadgeColor}
		/>
	)
}


const BadgeDotExample = () => {
	return (
		<CodeExample
			title='Dot'
			demo={<BadgeDot />}
			snippet={Snippets.BadgeDot}
		/>
	)
}


const BadgeMaxExample = () => {
	return (
		<CodeExample
			title='Max'
			demo={<BadgeMax />}
			snippet={Snippets.BadgeMax}
		/>
	)
}


const BadgeRipeExample = () => {
	return (
		<CodeExample
			title='Ripe'
			demo={<BadgeRipe />}
			snippet={Snippets.BadgeRipe}
		/>
	)
}



export {
    BadgeBaseExample,
BadgeCircleExample,
BadgeColorExample,
BadgeDotExample,
BadgeMaxExample,
BadgeRipeExample,
}