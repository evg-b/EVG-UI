import React, { useEffect, useState, useRef } from 'react';
import { withStyles } from 'react-jss';
import { Cubes, Radio, IconButton, Button } from '@evg-b/evg-ui';
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
        padding: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: '15px',
        '& > *': {
            margin: '0 5px',
        }
    }
}
const CubesSettings = (props) => {
    const { classes } = props
    const Cubes_ref = useRef()
    const [play, setPlay] = useState(true)
    const handlePlay = () => {
        setPlay(prev => {
            prev ? Cubes_ref.current.stop() : Cubes_ref.current.start()
            return !prev
        })
    }
    const handleRipple = () => {
        Cubes_ref.current.ripple(150, 18)
    }

    return (
        <div className={classes.base}>
            <Cubes ref={Cubes_ref} />
            <div className={classes.panelSettings}>
                <IconButton onClick={handlePlay}>
                    {play ? <Pause /> : <PlayArrow />}
                </IconButton>
                <Button onClick={handleRipple}>Ripple</Button>
            </div>
        </div>
    )
}

export default withStyles(styles)(CubesSettings)