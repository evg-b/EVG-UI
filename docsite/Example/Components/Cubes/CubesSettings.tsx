import { useRef, useState } from 'react'

import {
  Button,
  Cubes,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Popup,
  Radio
} from '@evg-b/evg-ui'

import * as Styled from './Cubes.styled'

const colors = [
  { label: 'Серый', value: '#e0e0e0' },
  { label: 'Красный', value: 'red700' },
  { label: 'Основной', value: 'primary' }
]

const CubesSettings = () => {
  const canvas = useRef<InstanceType<typeof Cubes>>(null)
  const colorTarget = useRef<HTMLElement>(null)
  const speedTarget = useRef<HTMLElement>(null)
  const sizeTarget = useRef<HTMLElement>(null)
  const [playing, setPlaying] = useState(true)
  const [color, setColor] = useState(colors[0].value)
  const [speed, setSpeed] = useState(1)
  const [size, setSize] = useState(40)

  const toggleAnimation = () => {
    if (playing) canvas.current?.stop()
    else canvas.current?.start()
    setPlaying(!playing)
  }

  return (
    <Styled.Canvas>
      <Cubes ref={canvas} color={color} speed={speed} size={size} />
      <Styled.Controls>
        <IconButton
          aria-label={playing ? 'Приостановить' : 'Продолжить'}
          onClick={toggleAnimation}>
          <Icon name={playing ? 'Pause' : 'PlayArrow'} />
        </IconButton>
        <Button onClick={() => canvas.current?.ripple(150, 18)}>Волна</Button>
        <Button ref={colorTarget}>Цвет</Button>
        <Styled.ColorPanel
          as={Popup}
          target={colorTarget}
          shift={15}
          position="top"
          mode="click">
          {colors.map((option) => (
            <Radio
              key={option.value}
              name="cube-color"
              aria-label={option.label}
              color={option.value}
              checked={color === option.value}
              onChange={() => setColor(option.value)}
            />
          ))}
        </Styled.ColorPanel>
        <Button ref={speedTarget}>Скорость</Button>
        <Popup target={speedTarget} shift={15} position="top" mode="click">
          <List>
            {[10, 5, 2, 1].map((value) => (
              <ListItem key={value} active={speed === value} onClick={() => setSpeed(value)}>
                <ListItemText>×{value}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Popup>
        <Button ref={sizeTarget}>Размер</Button>
        <Popup target={sizeTarget} shift={15} position="top" mode="click">
          <List>
            {[100, 80, 40, 20].map((value) => (
              <ListItem key={value} active={size === value} onClick={() => setSize(value)}>
                <ListItemText>{value} px</ListItemText>
              </ListItem>
            ))}
          </List>
        </Popup>
      </Styled.Controls>
    </Styled.Canvas>
  )
}

CubesSettings.displayName = 'CubesSettings'

export default CubesSettings
