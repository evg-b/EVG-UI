const sources = {
  "PopupAnimation.tsx": "import { useRef } from 'react'\nimport { Button, Popup } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst PopupAnimation = () => {\n  const btn1_ref = useRef<HTMLElement | null>(null)\n  const btn2_ref = useRef<HTMLElement | null>(null)\n  const btn3_ref = useRef<HTMLElement | null>(null)\n  return (\n    <Styled.Row>\n      <Button ref={btn1_ref} variant=\"outlined\">\n        fade\n      </Button>\n      <Button ref={btn2_ref} variant=\"outlined\">\n        zoom\n      </Button>\n      <Button ref={btn3_ref} variant=\"outlined\">\n        docking\n      </Button>\n      <Popup target={btn1_ref} animation=\"fade\">\n        fade\n      </Popup>\n      <Popup target={btn2_ref} animation=\"zoom\">\n        zoom\n      </Popup>\n      <Popup target={btn3_ref} animation=\"docking\">\n        docking\n      </Popup>\n    </Styled.Row>\n  )\n}\n\nPopupAnimation.displayName = 'PopupAnimation'\n\nexport default PopupAnimation\n",
  "../../ExampleLayout.styled.ts": "import styled from 'styled-components'\n\nexport const Wrap = styled.div`\n  display: flex;\n  flex-wrap: wrap;\n`\n\nexport const Row = styled(Wrap)`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const SpaciousRow = styled(Wrap)`\n  & > * {\n    margin: 10px;\n  }\n`\n\nexport const InlineGroup = styled.div`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const Column = styled(InlineGroup)`\n  display: flex;\n  flex-direction: column;\n`\n\nexport const CenteredColumn = styled(Column)`\n  align-items: center;\n`\n\nexport const AppBarColumn = styled.div`\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  align-items: center;\n`\n\nexport const FieldGroups = styled(Wrap)`\n  & > *,\n  & > div > * {\n    margin: 10px;\n  }\n`\n",
  "PopupAutoHide.tsx": "import { useRef } from 'react'\nimport { Button, Popup } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\n// TODO: переосмыслить autiHide\nconst TooltipBase = () => {\n  const btn1_ref = useRef<HTMLElement | null>(null)\n  const btn2_ref = useRef<HTMLElement | null>(null)\n  return (\n    <Styled.Row>\n      <Button ref={btn1_ref} variant=\"outlined\">\n        Popup\n      </Button>\n      <Button ref={btn2_ref} variant=\"outlined\">\n        Popup\n      </Button>\n      <Popup target={btn1_ref}>Popup</Popup>\n      <Popup target={btn2_ref} autoHide={false}>\n        Popup\n      </Popup>\n    </Styled.Row>\n  )\n}\n\nTooltipBase.displayName = 'TooltipBase'\n\nexport default TooltipBase\n",
  "PopupBase.tsx": "import { useRef } from 'react'\n\nimport { Button, Popup } from '@evg-b/evg-ui'\n\nimport * as Styled from './Popup.styled'\n\nconst PopupBase = () => {\n  const target = useRef<HTMLElement>(null)\n\n  return (\n    <>\n      <Styled.Target as={Button} ref={target} type=\"button\" variant=\"outlined\">\n        Наведите указатель\n      </Styled.Target>\n      <Popup target={target}>Popup</Popup>\n    </>\n  )\n}\n\nPopupBase.displayName = 'PopupBase'\n\nexport default PopupBase\n",
  "Popup.styled.ts": "import styled from 'styled-components'\n\nexport const Target = styled.button`\n  margin: 30px;\n`\n\nexport const WideTarget = styled(Target)`\n  width: 250px;\n  max-width: calc(100% - 60px);\n`\n\nexport const Label = styled.div`\n  padding: 10px;\n  border: 1px solid ${({ theme }) => theme.outline};\n  border-radius: 6px;\n  background-color: ${({ theme }) => theme.surfaceContainer};\n  color: ${({ theme }) => theme.onSurface};\n`\n\nexport const Viewport = styled.div`\n  width: 200px;\n  max-height: 200px;\n  background-color: ${({ theme }) => theme.surfaceContainer};\n`\n\nexport const ScrollContent = styled.div`\n  width: 600px;\n  height: 600px;\n  padding: 75px 0 0 60px;\n`\n",
  "PopupMode.tsx": "import { useRef } from 'react'\nimport { Button, Popup } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst PopupMode = () => {\n  const btn1_ref = useRef<HTMLElement | null>(null)\n  const btn2_ref = useRef<HTMLElement | null>(null)\n  return (\n    <Styled.Row>\n      <Button ref={btn1_ref} variant=\"outlined\">\n        hover\n      </Button>\n      <Button ref={btn2_ref} variant=\"outlined\">\n        click\n      </Button>\n      <Popup target={btn1_ref} mode=\"hover\">\n        Popup\n      </Popup>\n      <Popup target={btn2_ref} mode=\"click\">\n        Popup\n      </Popup>\n    </Styled.Row>\n  )\n}\n\nPopupMode.displayName = 'PopupMode'\n\nexport default PopupMode\n",
  "PopupPosition.tsx": "import { useRef } from 'react'\n\nimport { Button, Popup } from '@evg-b/evg-ui'\n\nimport * as Styled from './Popup.styled'\n\nconst PopupPosition = () => {\n  const target = useRef<HTMLElement>(null)\n\n  return (\n    <>\n      <Styled.WideTarget as={Button} ref={target} type=\"button\" variant=\"outlined\">\n        Положение\n      </Styled.WideTarget>\n      <Popup open position=\"top\" target={target}>top</Popup>\n      <Popup open position=\"top-left\" target={target}>top-left</Popup>\n      <Popup open position=\"top-right\" target={target}>top-right</Popup>\n    </>\n  )\n}\n\nPopupPosition.displayName = 'PopupPosition'\n\nexport default PopupPosition\n",
  "PopupScrollable.tsx": "import { useRef } from 'react'\n\nimport { Button, Popup, Scroll } from '@evg-b/evg-ui'\n\nimport * as Styled from './Popup.styled'\n\nconst PopupScrollable = () => {\n  const target = useRef<HTMLElement>(null)\n\n  return (\n    <Styled.Viewport as={Scroll} autoHide={false}>\n      <Styled.ScrollContent>\n        <Button ref={target} type=\"button\" variant=\"outlined\">Цель</Button>\n        <Popup open target={target}>Popup</Popup>\n      </Styled.ScrollContent>\n    </Styled.Viewport>\n  )\n}\n\nPopupScrollable.displayName = 'PopupScrollable'\n\nexport default PopupScrollable\n",
  "PopupShift.tsx": "import { useRef } from 'react'\n\nimport { Button, Popup } from '@evg-b/evg-ui'\n\nimport * as Styled from './Popup.styled'\n\nconst PopupShift = () => {\n  const target = useRef<HTMLElement>(null)\n\n  return (\n    <>\n      <Styled.WideTarget as={Button} ref={target} type=\"button\" variant=\"outlined\">\n        Смещение\n      </Styled.WideTarget>\n      <Styled.Label as={Popup} open target={target} position=\"top\">0</Styled.Label>\n      <Styled.Label as={Popup} open target={target} position=\"left\" shift={10}>10</Styled.Label>\n      <Styled.Label as={Popup} open target={target} position=\"right\" shift={-15}>−15</Styled.Label>\n    </>\n  )\n}\n\nPopupShift.displayName = 'PopupShift'\n\nexport default PopupShift\n"
}

const snippets = {
  PopupAnimation: {
    "PopupAnimation.tsx": sources["PopupAnimation.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  PopupAutoHide: {
    "PopupAutoHide.tsx": sources["PopupAutoHide.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  PopupBase: {
    "PopupBase.tsx": sources["PopupBase.tsx"],
    "Popup.styled.ts": sources["Popup.styled.ts"]
  },
  PopupMode: {
    "PopupMode.tsx": sources["PopupMode.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  PopupPosition: {
    "PopupPosition.tsx": sources["PopupPosition.tsx"],
    "Popup.styled.ts": sources["Popup.styled.ts"]
  },
  PopupScrollable: {
    "PopupScrollable.tsx": sources["PopupScrollable.tsx"],
    "Popup.styled.ts": sources["Popup.styled.ts"]
  },
  PopupShift: {
    "PopupShift.tsx": sources["PopupShift.tsx"],
    "Popup.styled.ts": sources["Popup.styled.ts"]
  }
}

export default snippets
