const sources = {
  "ScrollAutoHide.tsx": "import { Scroll } from '@evg-b/evg-ui'\n\nimport * as Styled from './Scroll.styled'\n\nconst ScrollAutoHide = () => (\n  <Styled.Viewport as={Scroll} autoHide>\n    {Array.from({ length: 25 }, (_, index) => (\n      <Styled.Tile key={index}>{index + 1}</Styled.Tile>\n    ))}\n  </Styled.Viewport>\n)\n\nScrollAutoHide.displayName = 'ScrollAutoHide'\n\nexport default ScrollAutoHide\n",
  "Scroll.styled.ts": "import styled from 'styled-components'\n\nexport const Viewport = styled.div`\n  width: 200px;\n  max-width: 100%;\n  height: 400px;\n  background-color: ${({ theme }) => theme.surfaceContainer};\n`\n\nexport const WideViewport = styled(Viewport)`\n  width: 400px;\n`\n\nexport const GrowingViewport = styled(Viewport)`\n  height: auto;\n  max-height: 400px;\n`\n\nexport const Tile = styled.div`\n  display: grid;\n  place-items: center;\n  width: 100px;\n  height: 100px;\n  margin: 10px;\n  color: ${({ theme }) => theme.onPrimary};\n  background-color: ${({ theme }) => theme.primary};\n`\n\nexport const WideTile = styled(Tile)`\n  width: 800px;\n`\n\nexport const Controls = styled.div`\n  display: flex;\n  gap: 8px;\n  margin-bottom: 10px;\n`\n",
  "ScrollBase.tsx": "import { Scroll } from '@evg-b/evg-ui'\n\nimport * as Styled from './Scroll.styled'\n\nconst ScrollBase = () => (\n  <Styled.Viewport as={Scroll} autoHide={false}>\n    {Array.from({ length: 5 }, (_, index) => (\n      <Styled.Tile key={index}>{index + 1}</Styled.Tile>\n    ))}\n  </Styled.Viewport>\n)\n\nScrollBase.displayName = 'ScrollBase'\n\nexport default ScrollBase\n",
  "ScrollMaxHeight.tsx": "import { useState } from 'react'\n\nimport { Button, Scroll } from '@evg-b/evg-ui'\n\nimport * as Styled from './Scroll.styled'\n\nconst ScrollMaxHeight = () => {\n  const [count, setCount] = useState(2)\n\n  return (\n    <div>\n      <Styled.Controls>\n        <Button type=\"button\" color=\"primary\" onClick={() => setCount((value) => value + 1)}>\n          Добавить\n        </Button>\n        <Button\n          type=\"button\"\n          color=\"primary\"\n          disabled={count === 0}\n          onClick={() => setCount((value) => Math.max(0, value - 1))}>\n          Убрать\n        </Button>\n      </Styled.Controls>\n      <Styled.GrowingViewport as={Scroll} autoHide={false}>\n        {Array.from({ length: count }, (_, index) => (\n          <Styled.Tile key={index}>{index + 1}</Styled.Tile>\n        ))}\n      </Styled.GrowingViewport>\n    </div>\n  )\n}\n\nScrollMaxHeight.displayName = 'ScrollMaxHeight'\n\nexport default ScrollMaxHeight\n",
  "ScrollTrackSizeAndColor.tsx": "import { Scroll } from '@evg-b/evg-ui'\n\nimport * as Styled from './Scroll.styled'\n\nconst ScrollTrackSizeAndColor = () => (\n  <Styled.Viewport as={Scroll} autoHide={false} trackSize={20} color=\"primary\">\n    {Array.from({ length: 25 }, (_, index) => (\n      <Styled.Tile key={index}>{index + 1}</Styled.Tile>\n    ))}\n  </Styled.Viewport>\n)\n\nScrollTrackSizeAndColor.displayName = 'ScrollTrackSizeAndColor'\n\nexport default ScrollTrackSizeAndColor\n",
  "ScrollVerticalAndHorizontal.tsx": "import { Scroll } from '@evg-b/evg-ui'\n\nimport * as Styled from './Scroll.styled'\n\nconst ScrollVerticalAndHorizontal = () => (\n  <Styled.WideViewport as={Scroll} autoHide={false} color=\"primary\">\n    {Array.from({ length: 25 }, (_, index) => (\n      <Styled.WideTile key={index}>{index + 1}</Styled.WideTile>\n    ))}\n  </Styled.WideViewport>\n)\n\nScrollVerticalAndHorizontal.displayName = 'ScrollVerticalAndHorizontal'\n\nexport default ScrollVerticalAndHorizontal\n"
}

const snippets = {
  ScrollAutoHide: {
    "ScrollAutoHide.tsx": sources["ScrollAutoHide.tsx"],
    "Scroll.styled.ts": sources["Scroll.styled.ts"]
  },
  ScrollBase: {
    "ScrollBase.tsx": sources["ScrollBase.tsx"],
    "Scroll.styled.ts": sources["Scroll.styled.ts"]
  },
  ScrollMaxHeight: {
    "ScrollMaxHeight.tsx": sources["ScrollMaxHeight.tsx"],
    "Scroll.styled.ts": sources["Scroll.styled.ts"]
  },
  ScrollTrackSizeAndColor: {
    "ScrollTrackSizeAndColor.tsx": sources["ScrollTrackSizeAndColor.tsx"],
    "Scroll.styled.ts": sources["Scroll.styled.ts"]
  },
  ScrollVerticalAndHorizontal: {
    "ScrollVerticalAndHorizontal.tsx": sources["ScrollVerticalAndHorizontal.tsx"],
    "Scroll.styled.ts": sources["Scroll.styled.ts"]
  }
}

export default snippets
