const sources = {
  "TooltipAnimation.tsx": "import { useRef } from 'react'\nimport { Button, Tooltip } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst TooltipAnimation = () => {\n  const btn1_ref = useRef<HTMLElement | null>(null)\n  const btn2_ref = useRef<HTMLElement | null>(null)\n  const btn3_ref = useRef<HTMLElement | null>(null)\n  return (\n    <Styled.Row>\n      <Button ref={btn1_ref} variant=\"outlined\">\n        fade\n      </Button>\n      <Button ref={btn2_ref} variant=\"outlined\">\n        zoom\n      </Button>\n      <Button ref={btn3_ref} variant=\"outlined\">\n        docking\n      </Button>\n      <Tooltip target={btn1_ref} animation=\"fade\">\n        fade\n      </Tooltip>\n      <Tooltip target={btn2_ref} animation=\"zoom\">\n        zoom\n      </Tooltip>\n      <Tooltip target={btn3_ref} animation=\"docking\">\n        docking\n      </Tooltip>\n    </Styled.Row>\n  )\n}\n\nTooltipAnimation.displayName = 'TooltipAnimation'\n\nexport default TooltipAnimation\n",
  "../../ExampleLayout.styled.ts": "import styled from 'styled-components'\n\nexport const Wrap = styled.div`\n  display: flex;\n  flex-wrap: wrap;\n`\n\nexport const Row = styled(Wrap)`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const SpaciousRow = styled(Wrap)`\n  & > * {\n    margin: 10px;\n  }\n`\n\nexport const InlineGroup = styled.div`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const Column = styled(InlineGroup)`\n  display: flex;\n  flex-direction: column;\n`\n\nexport const CenteredColumn = styled(Column)`\n  align-items: center;\n`\n\nexport const AppBarColumn = styled.div`\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  align-items: center;\n`\n\nexport const FieldGroups = styled(Wrap)`\n  & > *,\n  & > div > * {\n    margin: 10px;\n  }\n`\n",
  "TooltipAutoHide.tsx": "import { useRef } from 'react'\nimport { Button, Tooltip } from '@evg-b/evg-ui'\n\nconst TooltipAutoHide = () => {\n  const btn_ref = useRef<HTMLElement | null>(null)\n  return (\n    <>\n      <Button ref={btn_ref} variant=\"outlined\">\n        Tooltip\n      </Button>\n      <Tooltip target={btn_ref}>tooltip</Tooltip>\n    </>\n  )\n}\n\nTooltipAutoHide.displayName = 'TooltipAutoHide'\n\nexport default TooltipAutoHide\n",
  "TooltipBase.tsx": "import { useRef } from 'react'\nimport { Button, Tooltip } from '@evg-b/evg-ui'\n\nconst TooltipBase = () => {\n  const btn_ref = useRef<HTMLElement | null>(null)\n  return (\n    <>\n      <Button ref={btn_ref} variant=\"outlined\">\n        Tooltip\n      </Button>\n      <Tooltip target={btn_ref}>tooltip</Tooltip>\n    </>\n  )\n}\n\nTooltipBase.displayName = 'TooltipBase'\n\nexport default TooltipBase\n",
  "TooltipPosition.tsx": "import { useRef } from 'react'\n\nimport { Button, Tooltip } from '@evg-b/evg-ui'\n\nimport * as Styled from './Tooltip.styled'\n\nconst TooltipPosition = () => {\n  const target = useRef<HTMLElement>(null)\n\n  return (\n    <>\n      <Styled.Target as={Button} ref={target} type=\"button\" variant=\"outlined\">\n        Положение\n      </Styled.Target>\n      <Tooltip open position=\"top\" target={target}>top</Tooltip>\n      <Tooltip open position=\"top-left\" target={target}>top-left</Tooltip>\n      <Tooltip open position=\"top-right\" target={target}>top-right</Tooltip>\n    </>\n  )\n}\n\nTooltipPosition.displayName = 'TooltipPosition'\n\nexport default TooltipPosition\n",
  "Tooltip.styled.ts": "import styled from 'styled-components'\n\nexport const Target = styled.button`\n  width: 250px;\n  max-width: calc(100% - 40px);\n  margin: 20px;\n`\n"
}

const snippets = {
  TooltipAnimation: {
    "TooltipAnimation.tsx": sources["TooltipAnimation.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  TooltipAutoHide: {
    "TooltipAutoHide.tsx": sources["TooltipAutoHide.tsx"]
  },
  TooltipBase: {
    "TooltipBase.tsx": sources["TooltipBase.tsx"]
  },
  TooltipPosition: {
    "TooltipPosition.tsx": sources["TooltipPosition.tsx"],
    "Tooltip.styled.ts": sources["Tooltip.styled.ts"]
  }
}

export default snippets
