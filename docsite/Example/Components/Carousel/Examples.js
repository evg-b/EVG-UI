import React from 'react';
import { CodeExample } from '@evg-b/evg-tools';
import Snippets from './snippets'
import CarouselBase from './CarouselBase'
import CarouselOnChangeImg from './CarouselOnChangeImg'


const CarouselBaseExample = () => {
	return (
		<CodeExample
			title='Base'
			demo={<CarouselBase />}
			snippet={Snippets.CarouselBase}
		/>
	)
}


const CarouselOnChangeImgExample = () => {
	return (
		<CodeExample
			title='OnChangeImg'
			demo={<CarouselOnChangeImg />}
			snippet={Snippets.CarouselOnChangeImg}
		/>
	)
}



export {
    CarouselBaseExample,
CarouselOnChangeImgExample,
}