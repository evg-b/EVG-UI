import React from 'react';
import { CodeExample } from '@evg-b/evg-tools';
import Snippets from './snippets'
import ModalBase from './ModalBase'
import ModalEsc from './ModalEsc'


const ModalBaseExample = () => {
	return (
		<CodeExample
			title='Base'
			demo={<ModalBase />}
			snippet={Snippets.ModalBase}
		/>
	)
}


const ModalEscExample = () => {
	return (
		<CodeExample
			title='Esc'
			demo={<ModalEsc />}
			snippet={Snippets.ModalEsc}
		/>
	)
}



export {
    ModalBaseExample,
ModalEscExample,
}