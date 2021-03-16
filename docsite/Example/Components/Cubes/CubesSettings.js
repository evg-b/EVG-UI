import React, { useState, useRef } from 'react';
import { Cubes, Radio, Popup, IconButton, Button, List, ListItem, ListItemText, withStyles } from '@evg-b/evg-ui';
import { PlayArrow, Pause } from '@evg-b/evg-icons'

const styles = {
    base: {
        display: 'flex',
        position: 'relative',
        width: '800px',
        height: '800px',
        backgroundColor: '#3d3d3d',
    },
    panelSettings: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 10,
        left: '50%',
        transform: 'translateX(-50%)',
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: '15px',
        '& > *': {
            margin: '0 5px',
        }
    },
    colorPanel: {
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: '15px',
    },

}
const CubesSettings = (props) => {
    const { classes } = props
    const Cubes_ref = useRef()
    const Color_ref = useRef()
    const Speed_ref = useRef()
    const Size_ref = useRef()
    const [play, setPlay] = useState(true)
    const [colorActive, setColorActive] = useState(0)
    const [speedActive, setSpeedActive] = useState(1)
    const [sizeActive, setSizeActive] = useState(40)
    const arrColor = ['', 'red700', 'primary']
    const handlePlay = () => {
        setPlay(prev => {
            prev ? Cubes_ref.current.stop() : Cubes_ref.current.start()
            return !prev
        })
    }
    const handleRipple = () => {
        Cubes_ref.current.ripple(150, 18)
    }
    const handleChangeColor = ({ target }) => {
        setColorActive(+target.value)
    }
    const handleChangeSpeed = ({ currentTarget }) => {
        setSpeedActive(+currentTarget.value)
    }
    const handleChangeSize = ({ currentTarget }) => {
        setSizeActive(+currentTarget.value)
    }
    return (
        <div className={classes.base}>
            <Cubes color={arrColor[colorActive]} speed={speedActive} size={sizeActive} ref={Cubes_ref} />
            <div className={classes.panelSettings}>
                <IconButton onClick={handlePlay}>
                    {play ? <Pause /> : <PlayArrow />}
                </IconButton>
                <Button onClick={handleRipple}>Ripple</Button>
                <Button ref={Color_ref}>Color</Button>
                <Popup target={Color_ref} shift={15} position='top' mode='click' className={classes.colorPanel}>
                    <Radio value={0} checked={colorActive === 0} onClick={handleChangeColor} />
                    <Radio value={1} checked={colorActive === 1} onClick={handleChangeColor} color={arrColor[1]} />
                    <Radio value={2} checked={colorActive === 2} onClick={handleChangeColor} color={arrColor[2]} />
                </Popup>
                <Button ref={Speed_ref}>Speed</Button>
                <Popup target={Speed_ref} shift={15} position='top' mode='click'>
                    <List>
                        <ListItem value={10} active={speedActive === 10} onClick={handleChangeSpeed}>
                            <ListItemText>x 10</ListItemText>
                        </ListItem>
                        <ListItem value={5} active={speedActive === 5} onClick={handleChangeSpeed}>
                            <ListItemText>x 5</ListItemText>
                        </ListItem>
                        <ListItem value={2} active={speedActive === 2} onClick={handleChangeSpeed}>
                            <ListItemText>x 2</ListItemText>
                        </ListItem>
                        <ListItem value={1} active={speedActive === 1} onClick={handleChangeSpeed}>
                            <ListItemText>x 1</ListItemText>
                        </ListItem>
                    </List>
                </Popup>
                <Button ref={Size_ref}>Size</Button>
                <Popup target={Size_ref} shift={15} position='top' mode='click'>
                    <List>
                        <ListItem value={100} active={sizeActive === 100} onClick={handleChangeSize}>
                            <ListItemText>100px</ListItemText>
                        </ListItem>
                        <ListItem value={80} active={sizeActive === 80} onClick={handleChangeSize}>
                            <ListItemText>80px</ListItemText>
                        </ListItem>
                        <ListItem value={40} active={sizeActive === 40} onClick={handleChangeSize}>
                            <ListItemText>40px</ListItemText>
                        </ListItem>
                        <ListItem value={20} active={sizeActive === 20} onClick={handleChangeSize}>
                            <ListItemText>20px</ListItemText>
                        </ListItem>
                    </List>
                </Popup>
            </div>
        </div>
    )
}

export default withStyles(styles)(CubesSettings)