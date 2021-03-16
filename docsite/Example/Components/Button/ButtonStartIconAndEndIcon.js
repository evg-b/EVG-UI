import React from 'react';
import { Button, withStyles } from '@evg-b/evg-ui';
import { Check, Cancel } from '@evg-b/evg-icons';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const ButtonStartIconAndEndIcon = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Button
                startIcon={<Check />}
            >
                default
            </Button>
            <Button
                variant='contained'
                color='primary'
                endIcon={<Cancel />}
            >
                Button
            </Button>
            <Button
                variant='outlined'
                color='fail'
                round
                startIcon={<Check />}
                endIcon={<Cancel />}
            >
                outlined
            </Button>
        </div>
    )
}

export default withStyles(styles)(ButtonStartIconAndEndIcon)