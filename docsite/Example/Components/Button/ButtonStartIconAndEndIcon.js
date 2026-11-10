import React from 'react';
import { Button, withStyles, Icon } from '@evg-b/evg-ui'


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
                startIcon={<Icon name="Check" />}
            >
                default
            </Button>
            <Button
                variant='contained'
                color='primary'
                endIcon={<Icon name="Cancel" />}
            >
                Button
            </Button>
            <Button
                variant='outlined'
                color='fail'
                round
                startIcon={<Icon name="Check" />}
                endIcon={<Icon name="Cancel" />}
            >
                outlined
            </Button>
        </div>
    )
}

export default withStyles(styles)(ButtonStartIconAndEndIcon)