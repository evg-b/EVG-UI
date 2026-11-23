const sources = {
  "LoaderBase.tsx": "import { Loader } from '@evg-b/evg-ui'\n\nconst LoaderBase = () => {\n  return <Loader color=\"primary\" />\n}\n\nLoaderBase.displayName = 'LoaderBase'\n\nexport default LoaderBase\n",
  "LoaderColor.tsx": "import { Loader } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst LoaderColor = () => {\n  return (\n    <Styled.Row>\n      <Loader />\n      <Loader color=\"primary\" />\n      <Loader color=\"warn\" />\n    </Styled.Row>\n  )\n}\n\nLoaderColor.displayName = 'LoaderColor'\n\nexport default LoaderColor\n",
  "../../ExampleLayout.styled.ts": "import styled from 'styled-components'\n\nexport const Wrap = styled.div`\n  display: flex;\n  flex-wrap: wrap;\n`\n\nexport const Row = styled(Wrap)`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const SpaciousRow = styled(Wrap)`\n  & > * {\n    margin: 10px;\n  }\n`\n\nexport const InlineGroup = styled.div`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const Column = styled(InlineGroup)`\n  display: flex;\n  flex-direction: column;\n`\n\nexport const CenteredColumn = styled(Column)`\n  align-items: center;\n`\n\nexport const AppBarColumn = styled.div`\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  align-items: center;\n`\n\nexport const FieldGroups = styled(Wrap)`\n  & > *,\n  & > div > * {\n    margin: 10px;\n  }\n`\n",
  "LoaderDepth.tsx": "import { Loader } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst LoaderSize = () => {\n  return (\n    <Styled.Row>\n      <Loader depth={1} />\n      <Loader />\n      <Loader depth={8} />\n    </Styled.Row>\n  )\n}\n\nLoaderSize.displayName = 'LoaderSize'\n\nexport default LoaderSize\n",
  "LoaderSize.tsx": "import { Loader } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst LoaderSize = () => {\n  return (\n    <Styled.Row>\n      <Loader size={30} />\n      <Loader />\n      <Loader size={60} />\n    </Styled.Row>\n  )\n}\n\nLoaderSize.displayName = 'LoaderSize'\n\nexport default LoaderSize\n"
}

const snippets = {
  LoaderBase: {
    "LoaderBase.tsx": sources["LoaderBase.tsx"]
  },
  LoaderColor: {
    "LoaderColor.tsx": sources["LoaderColor.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  LoaderDepth: {
    "LoaderDepth.tsx": sources["LoaderDepth.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  LoaderSize: {
    "LoaderSize.tsx": sources["LoaderSize.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  }
}

export default snippets
