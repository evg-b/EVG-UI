import React from 'react';
import { CodeExample } from '@evg-b/evg-tools';
import Snippets from './snippets'
import AvatarBase from './AvatarBase'
import AvatarColor from './AvatarColor'
import AvatarGroupAndSize from './AvatarGroupAndSize'
import AvatarMultiple from './AvatarMultiple'
import AvatarNotImage from './AvatarNotImage'
import AvatarSize from './AvatarSize'
import AvatarStatus from './AvatarStatus'
import AvatarStatusColor from './AvatarStatusColor'


const AvatarBaseExample = () => {
	return (
		<CodeExample
			title='Base'
			demo={<AvatarBase />}
			snippet={Snippets.AvatarBase}
		/>
	)
}


const AvatarColorExample = () => {
	return (
		<CodeExample
			title='Color'
			demo={<AvatarColor />}
			snippet={Snippets.AvatarColor}
		/>
	)
}


const AvatarGroupAndSizeExample = () => {
	return (
		<CodeExample
			title='GroupAndSize'
			demo={<AvatarGroupAndSize />}
			snippet={Snippets.AvatarGroupAndSize}
		/>
	)
}


const AvatarMultipleExample = () => {
	return (
		<CodeExample
			title='Multiple'
			demo={<AvatarMultiple />}
			snippet={Snippets.AvatarMultiple}
		/>
	)
}


const AvatarNotImageExample = () => {
	return (
		<CodeExample
			title='NotImage'
			demo={<AvatarNotImage />}
			snippet={Snippets.AvatarNotImage}
		/>
	)
}


const AvatarSizeExample = () => {
	return (
		<CodeExample
			title='Size'
			demo={<AvatarSize />}
			snippet={Snippets.AvatarSize}
		/>
	)
}


const AvatarStatusExample = () => {
	return (
		<CodeExample
			title='Status'
			demo={<AvatarStatus />}
			snippet={Snippets.AvatarStatus}
		/>
	)
}


const AvatarStatusColorExample = () => {
	return (
		<CodeExample
			title='StatusColor'
			demo={<AvatarStatusColor />}
			snippet={Snippets.AvatarStatusColor}
		/>
	)
}



export {
    AvatarBaseExample,
AvatarColorExample,
AvatarGroupAndSizeExample,
AvatarMultipleExample,
AvatarNotImageExample,
AvatarSizeExample,
AvatarStatusExample,
AvatarStatusColorExample,
}