import React from 'react';
import { CodeExample } from '@evg-b/evg-ui';
import Snippets from './snippets'
import ImageBase from './ImageBase'
import ImageBroken from './ImageBroken'
import Imageloader from './Imageloader'


const ImageBaseExample = () => {
	return (
		<CodeExample
			title='Base'
			demo={<ImageBase />}
			snippet={Snippets.ImageBase}
		/>
	)
}

const ImageBrokenExample = () => {
	return (
		<CodeExample
			title='Broken'
			demo={<ImageBroken />}
			snippet={Snippets.ImageBroken}
		/>
	)
}

const ImageloaderExample = () => {
	return (
		<CodeExample
			title='loader'
			demo={<Imageloader />}
			snippet={Snippets.Imageloader}
		/>
	)
}

export { 
	ImageBaseExample,
ImageBrokenExample,
ImageloaderExample,

}
