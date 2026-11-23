const sources = {
  "CarouselBase.tsx": "import { Carousel } from '@evg-b/evg-ui'\nimport useBaseUrl from '@docusaurus/useBaseUrl'\n\nimport * as Styled from './Carousel.styled'\n\nconst CarouselBase = () => {\n  const imgs = [\n    useBaseUrl('/source/Carousel/1.jpg'),\n    useBaseUrl('/source/Carousel/2.jpg'),\n    useBaseUrl('/source/Carousel/3.jpg'),\n    useBaseUrl('/source/Carousel/4.jpg'),\n    useBaseUrl('/source/Carousel/5.jpg'),\n    useBaseUrl('/source/Carousel/6.jpg'),\n    useBaseUrl('/source/Carousel/7.jpg'),\n    useBaseUrl('/source/Carousel/8.jpg'),\n    useBaseUrl('/source/Carousel/9.jpg'),\n    useBaseUrl('/source/Carousel/10.jpg')\n  ]\n  return (\n    <Styled.Frame>\n      <Carousel imgs={imgs} />\n    </Styled.Frame>\n  )\n}\n\nCarouselBase.displayName = 'CarouselBase'\n\nexport default CarouselBase\n",
  "Carousel.styled.ts": "import styled from 'styled-components'\n\nexport const Frame = styled.div`\n  width: 600px;\n  max-width: 100%;\n  height: 400px;\n  overflow: hidden;\n  border-radius: 6px;\n`\n",
  "CarouselOnChangeImg.tsx": "import { useState } from 'react'\n\nimport useBaseUrl from '@docusaurus/useBaseUrl'\nimport { Carousel } from '@evg-b/evg-ui'\n\nimport * as Styled from './Carousel.styled'\n\nconst CarouselOnChangeImg = () => {\n  const [index, setIndex] = useState(0)\n  const imgs = [\n    useBaseUrl('/source/Carousel/1.jpg'),\n    useBaseUrl('/source/Carousel/2.jpg'),\n    useBaseUrl('/source/Carousel/3.jpg')\n  ]\n  return (\n    <div>\n      <Styled.Frame>\n        <Carousel imgs={imgs} onChangeImg={setIndex} />\n      </Styled.Frame>\n      <output>Слайд {index + 1} из {imgs.length}</output>\n    </div>\n  )\n}\n\nCarouselOnChangeImg.displayName = 'CarouselOnChangeImg'\n\nexport default CarouselOnChangeImg\n"
}

const snippets = {
  CarouselBase: {
    "CarouselBase.tsx": sources["CarouselBase.tsx"],
    "Carousel.styled.ts": sources["Carousel.styled.ts"]
  },
  CarouselOnChangeImg: {
    "CarouselOnChangeImg.tsx": sources["CarouselOnChangeImg.tsx"],
    "Carousel.styled.ts": sources["Carousel.styled.ts"]
  }
}

export default snippets
