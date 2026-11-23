const sources = {
  "ImageBase.tsx": "import { Image } from '@evg-b/evg-ui'\nimport useBaseUrl from '@docusaurus/useBaseUrl'\n\nimport * as Styled from './Image.styled'\n\nconst ImageBase = () => {\n  return (\n    <Styled.Row>\n      <Styled.Preview as={Image} src={useBaseUrl('/source/Image/1.jpg')} />\n      <Styled.Preview as={Image} src={useBaseUrl('/source/Image/2.jpg')} />\n      <Styled.Preview as={Image} src={useBaseUrl('/source/Image/3.jpg')} />\n    </Styled.Row>\n  )\n}\n\nImageBase.displayName = 'ImageBase'\n\nexport default ImageBase\n",
  "Image.styled.ts": "import styled from 'styled-components'\n\nimport { Wrap } from '../../ExampleLayout.styled'\n\nexport { Wrap as Row }\n\nexport const CenteredRow = styled(Wrap)`\n  align-items: center;\n`\n\nexport const Preview = styled.div`\n  margin: 5px;\n  width: 200px;\n  height: 200px;\n  border-radius: 6%;\n  object-fit: cover;\n`\n",
  "../../ExampleLayout.styled.ts": "import styled from 'styled-components'\n\nexport const Wrap = styled.div`\n  display: flex;\n  flex-wrap: wrap;\n`\n\nexport const Row = styled(Wrap)`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const SpaciousRow = styled(Wrap)`\n  & > * {\n    margin: 10px;\n  }\n`\n\nexport const InlineGroup = styled.div`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const Column = styled(InlineGroup)`\n  display: flex;\n  flex-direction: column;\n`\n\nexport const CenteredColumn = styled(Column)`\n  align-items: center;\n`\n\nexport const AppBarColumn = styled.div`\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  align-items: center;\n`\n\nexport const FieldGroups = styled(Wrap)`\n  & > *,\n  & > div > * {\n    margin: 10px;\n  }\n`\n",
  "ImageBroken.tsx": "import { useState } from 'react'\n\nimport useBaseUrl from '@docusaurus/useBaseUrl'\nimport { Button, Image } from '@evg-b/evg-ui'\n\nimport * as Styled from './Image.styled'\n\nconst ImageBroken = () => {\n  const [attempt, setAttempt] = useState(0)\n  const source = useBaseUrl('/source/Image/missing.jpg')\n\n  return (\n    <Styled.CenteredRow>\n      <Styled.Preview\n        as={Image}\n        src={`${source}?attempt=${attempt}`}\n        alt=\"Пример ошибки загрузки\"\n      />\n      <Button type=\"button\" onClick={() => setAttempt((value) => value + 1)}>\n        Повторить\n      </Button>\n    </Styled.CenteredRow>\n  )\n}\n\nImageBroken.displayName = 'ImageBroken'\n\nexport default ImageBroken\n",
  "Imageloader.tsx": "import { useState } from 'react'\nimport { Image, Button } from '@evg-b/evg-ui'\nimport useBaseUrl from '@docusaurus/useBaseUrl'\n\nimport * as Styled from './Image.styled'\n\nconst ImageLoader = () => {\n  const [hash, setHash] = useState('')\n  const newHash = () => {\n    setHash(String(Date.now()))\n  }\n  const url = useBaseUrl(`/source/Image/2.jpg?${hash}`)\n  return (\n    <Styled.CenteredRow>\n      <Styled.Preview as={Image} src={url} />\n      <Button onClick={newHash}>reload</Button>\n    </Styled.CenteredRow>\n  )\n}\n\nImageLoader.displayName = 'ImageLoader'\n\nexport default ImageLoader\n"
}

const snippets = {
  ImageBase: {
    "ImageBase.tsx": sources["ImageBase.tsx"],
    "Image.styled.ts": sources["Image.styled.ts"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  ImageBroken: {
    "ImageBroken.tsx": sources["ImageBroken.tsx"],
    "Image.styled.ts": sources["Image.styled.ts"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  Imageloader: {
    "Imageloader.tsx": sources["Imageloader.tsx"],
    "Image.styled.ts": sources["Image.styled.ts"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  }
}

export default snippets
