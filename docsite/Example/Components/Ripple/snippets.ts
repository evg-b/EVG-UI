const sources = {
  "RippleBase.tsx": "import { Ripple } from '@evg-b/evg-ui'\n\nimport * as Styled from './Ripple.styled'\n\nconst RippleBase = () => {\n  return (\n    <Styled.Surface>\n      <Ripple />\n    </Styled.Surface>\n  )\n}\n\nRippleBase.displayName = 'RippleBase'\n\nexport default RippleBase\n",
  "Ripple.styled.ts": "import styled from 'styled-components'\n\nimport { Color, Elevation } from '@evg-b/evg-ui'\n\nimport type { RippleSurfaceProps } from './Ripple.types'\n\nexport const Surface = styled.div`\n  ${Elevation(2)}\n  position: relative;\n  width: 300px;\n  height: 300px;\n`\n\nexport const Row = styled.div`\n  display: flex;\n  flex-wrap: wrap;\n`\n\nexport const Sample = styled.span<RippleSurfaceProps>`\n  ${Elevation(2)}\n  position: relative;\n  width: 150px;\n  height: 150px;\n  margin: 5px;\n  background-color: ${({ $background }) => $background};\n`\n\nexport const States = styled(Row)`\n  justify-content: space-between;\n`\n\nexport const StateGroup = styled.div<RippleSurfaceProps>`\n  ${Elevation(1)}\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 250px;\n  padding: 15px;\n  background-color: ${({ $background }) => $background};\n  color: ${({ $background }) => Color($background).Contrast()};\n`\n\nexport const StateTitle = styled.div`\n  padding: 10px;\n`\n\nexport const State = styled.div<RippleSurfaceProps>`\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 80%;\n  height: 50px;\n  margin: 15px;\n  padding: 10px;\n  border-radius: 4px;\n  background-color: ${({ $background }) => $background};\n`\n",
  "Ripple.types.ts": "export type RippleSurfaceProps = {\n  $background?: string\n}\n",
  "RippleColor.tsx": "import { colors, Ripple } from '@evg-b/evg-ui'\n\nimport * as Styled from './Ripple.styled'\n\nconst RippleColor = () => {\n  const gray400 = colors.gray[400]\n  const purple600 = colors.purple[600]\n\n  return (\n    <Styled.Row>\n      <Styled.Sample>\n        <Ripple />\n      </Styled.Sample>\n      <Styled.Sample $background={gray400}>\n        <Ripple color={gray400} />\n      </Styled.Sample>\n      <Styled.Sample $background={purple600}>\n        <Ripple color={purple600} />\n      </Styled.Sample>\n    </Styled.Row>\n  )\n}\n\nRippleColor.displayName = 'RippleColor'\n\nexport default RippleColor\n",
  "RippleContrast.tsx": "import { colors, Ripple } from '@evg-b/evg-ui'\n\nimport * as Styled from './Ripple.styled'\n\nconst RippleContrast = () => {\n  const purple600 = colors.purple[600]\n\n  return (\n    <Styled.Row>\n      <Styled.Sample $background={purple600}>\n        <Ripple color={purple600} />\n      </Styled.Sample>\n      <Styled.Sample>\n        <Ripple color={purple600} contrast={false} />\n      </Styled.Sample>\n    </Styled.Row>\n  )\n}\n\nRippleContrast.displayName = 'RippleContrast'\n\nexport default RippleContrast\n"
}

const snippets = {
  RippleBase: {
    "RippleBase.tsx": sources["RippleBase.tsx"],
    "Ripple.styled.ts": sources["Ripple.styled.ts"],
    "Ripple.types.ts": sources["Ripple.types.ts"]
  },
  RippleColor: {
    "RippleColor.tsx": sources["RippleColor.tsx"],
    "Ripple.styled.ts": sources["Ripple.styled.ts"],
    "Ripple.types.ts": sources["Ripple.types.ts"]
  },
  RippleContrast: {
    "RippleContrast.tsx": sources["RippleContrast.tsx"],
    "Ripple.styled.ts": sources["Ripple.styled.ts"],
    "Ripple.types.ts": sources["Ripple.types.ts"]
  }
}

export default snippets
