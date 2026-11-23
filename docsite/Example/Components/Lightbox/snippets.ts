const sources = {
  "LightboxBase.tsx": "import { Lightbox } from '@evg-b/evg-ui'\nimport useBaseUrl from '@docusaurus/useBaseUrl'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst LightboxBase = () => {\n  const imgs = [\n    useBaseUrl('/source/Carousel/1.jpg'),\n    useBaseUrl('/source/Carousel/2.jpg'),\n    useBaseUrl('/source/Carousel/3.jpg'),\n    useBaseUrl('/source/Carousel/4.jpg'),\n    useBaseUrl('/source/Carousel/5.jpg'),\n    useBaseUrl('/source/Carousel/6.jpg'),\n    useBaseUrl('/source/Carousel/7.jpg'),\n    useBaseUrl('/source/Carousel/8.jpg'),\n    useBaseUrl('/source/Carousel/9.jpg')\n  ]\n  return (\n    <Styled.Row>\n      <Lightbox imgs={imgs} />\n    </Styled.Row>\n  )\n}\n\nLightboxBase.displayName = 'LightboxBase'\n\nexport default LightboxBase\n",
  "../../ExampleLayout.styled.ts": "import styled from 'styled-components'\n\nexport const Wrap = styled.div`\n  display: flex;\n  flex-wrap: wrap;\n`\n\nexport const Row = styled(Wrap)`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const SpaciousRow = styled(Wrap)`\n  & > * {\n    margin: 10px;\n  }\n`\n\nexport const InlineGroup = styled.div`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const Column = styled(InlineGroup)`\n  display: flex;\n  flex-direction: column;\n`\n\nexport const CenteredColumn = styled(Column)`\n  align-items: center;\n`\n\nexport const AppBarColumn = styled.div`\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  align-items: center;\n`\n\nexport const FieldGroups = styled(Wrap)`\n  & > *,\n  & > div > * {\n    margin: 10px;\n  }\n`\n"
}

const snippets = {
  LightboxBase: {
    "LightboxBase.tsx": sources["LightboxBase.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  }
}

export default snippets
