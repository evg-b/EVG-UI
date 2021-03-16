import React from 'react';
import { CodeExample } from '@evg-b/evg-tools';
import Snippets from './snippets'
import SkeletonAnimation from './SkeletonAnimation'
import SkeletonAvatar from './SkeletonAvatar'
import SkeletonBase from './SkeletonBase'
import SkeletonText from './SkeletonText'


const SkeletonAnimationExample = () => {
	return (
		<CodeExample
			title='Animation'
			demo={<SkeletonAnimation />}
			snippet={Snippets.SkeletonAnimation}
		/>
	)
}


const SkeletonAvatarExample = () => {
	return (
		<CodeExample
			title='Avatar'
			demo={<SkeletonAvatar />}
			snippet={Snippets.SkeletonAvatar}
		/>
	)
}


const SkeletonBaseExample = () => {
	return (
		<CodeExample
			title='Base'
			demo={<SkeletonBase />}
			snippet={Snippets.SkeletonBase}
		/>
	)
}


const SkeletonTextExample = () => {
	return (
		<CodeExample
			title='Text'
			demo={<SkeletonText />}
			snippet={Snippets.SkeletonText}
		/>
	)
}



export {
    SkeletonAnimationExample,
SkeletonAvatarExample,
SkeletonBaseExample,
SkeletonTextExample,
}