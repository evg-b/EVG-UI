import React from 'react';
import { CodeExample } from '@evg-b/evg-tools';
import Snippets from './snippets'
import ListActions from './ListActions'
import ListAvatar from './ListAvatar'
import ListBase from './ListBase'
import ListColor from './ListColor'
import ListHeight from './ListHeight'
import ListMeta from './ListMeta'
import ListSecondaryText from './ListSecondaryText'


const ListActionsExample = () => {
	return (
		<CodeExample
			title='Actions'
			demo={<ListActions />}
			snippet={Snippets.ListActions}
		/>
	)
}


const ListAvatarExample = () => {
	return (
		<CodeExample
			title='Avatar'
			demo={<ListAvatar />}
			snippet={Snippets.ListAvatar}
		/>
	)
}


const ListBaseExample = () => {
	return (
		<CodeExample
			title='Base'
			demo={<ListBase />}
			snippet={Snippets.ListBase}
		/>
	)
}


const ListColorExample = () => {
	return (
		<CodeExample
			title='Color'
			demo={<ListColor />}
			snippet={Snippets.ListColor}
		/>
	)
}


const ListHeightExample = () => {
	return (
		<CodeExample
			title='Height'
			demo={<ListHeight />}
			snippet={Snippets.ListHeight}
		/>
	)
}


const ListMetaExample = () => {
	return (
		<CodeExample
			title='Meta'
			demo={<ListMeta />}
			snippet={Snippets.ListMeta}
		/>
	)
}


const ListSecondaryTextExample = () => {
	return (
		<CodeExample
			title='SecondaryText'
			demo={<ListSecondaryText />}
			snippet={Snippets.ListSecondaryText}
		/>
	)
}



export {
    ListActionsExample,
ListAvatarExample,
ListBaseExample,
ListColorExample,
ListHeightExample,
ListMetaExample,
ListSecondaryTextExample,
}