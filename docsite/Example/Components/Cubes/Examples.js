import React from 'react';
import { CodeExample } from '@evg-b/evg-tools';
import Snippets from './snippets'
import CubesBase from './CubesBase'
import CubesSettings from './CubesSettings'


const CubesBaseExample = () => {
	return (
		<CodeExample
			title='Base'
			demo={<CubesBase />}
			snippet={Snippets.CubesBase}
		/>
	)
}


const CubesSettingsExample = () => {
	return (
		<CodeExample
			title='Settings'
			demo={<CubesSettings />}
			snippet={Snippets.CubesSettings}
		/>
	)
}



export {
    CubesBaseExample,
CubesSettingsExample,
}