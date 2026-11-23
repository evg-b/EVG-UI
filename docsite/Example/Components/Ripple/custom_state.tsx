import { Color } from '@evg-b/evg-ui'

import * as Styled from './Ripple.styled'

const StatesColor: Record<string, string> = {
  White: '#FFFFFF',
  Contrast: 'purple600',
  Color: 'purple600'
}
const ArrayStates: Record<string, Record<string, number>> = {
  White: {
    Enabled: 0,
    Hover: 0.04,
    Focus: 0.12,
    // 'Selected': 0.08,
    Activated: 0.12,
    Pressed: 0.12
    // 'Dragged': 0.08,
  },
  Contrast: {
    Enabled: 0,
    Hover: 0.12,
    Focus: 0.36,
    // 'Selected': 0.24,
    Activated: 0.36,
    Pressed: 0.48
    // 'Dragged': 0.32,
  },
  Color: {
    Enabled: 0,
    Hover: 0.08,
    Focus: 0.24,
    // 'Selected': 0.16,
    Activated: 0.24,
    Pressed: 0.32
    // 'Dragged': 0.16,
  }
}
const StatesRipple = () => {
  return (
    <Styled.States>
      {Object.keys(ArrayStates).map((state, index) => {
        let colorState =
          index !== 2
            ? Color(StatesColor[state]).Base()
            : Color(StatesColor[state]).Contrast()
        return (
          <Styled.StateGroup key={state} $background={colorState}>
            <Styled.StateTitle>{state}</Styled.StateTitle>
            {Object.entries(ArrayStates[state]).map((config) => {
              let colorRipple =
                index === 2
                  ? Color(StatesColor[state]).Base()
                  : Color(StatesColor[state]).Contrast()
              let colorRippleState = Color(colorRipple).Base('rgba', config[1])
              return (
                <Styled.State key={config[0]} $background={colorRippleState}>
                  <span>{config[0]}</span>
                  <span>{config[1] * 100}%</span>
                </Styled.State>
              )
            })}
          </Styled.StateGroup>
        )
      })}
    </Styled.States>
  )
}

StatesRipple.displayName = 'StatesRipple'

export default StatesRipple
