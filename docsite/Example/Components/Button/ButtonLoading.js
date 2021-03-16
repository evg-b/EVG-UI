import React, { useState } from 'react';
import { Button, withStyles } from '@evg-b/evg-ui';
import { Check } from '@evg-b/evg-icons';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const ButtonLoading = (props) => {
    const { classes } = props
    const [loading, setLoading] = useState([])
    const changeLoad = (index, state) => {
        setLoading(l => {
            let newL = [...l]
            newL[index] = state
            return newL
        })
    }
    const handleLoad = (index) => {
        changeLoad(index, true)
        setTimeout(() => changeLoad(index, false), 3000)
    }
    return (
        <div className={classes.base}>
            <Button
                loading={loading[1]}
                variant='contained'
                color='primary'
                startIcon={<Check />}
                onClick={() => handleLoad(1)}
            >
                Click Me!
            </Button>
            <Button
                loading={loading[2]}
                variant='contained'
                color='primary'
                onClick={() => handleLoad(2)}
            >
                And Me Me!
            </Button>
        </div>
    )
}

export default withStyles(styles)(ButtonLoading)