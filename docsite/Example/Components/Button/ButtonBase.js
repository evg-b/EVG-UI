import React from 'react';
import { Button, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const ButtonBase = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Button>text</Button>
            <Button variant='contained' color='primary' >contained</Button>
            <Button variant='contained' color='primary' disabled>disabled</Button>
            <Button variant='contained' href="#base-button">Link</Button>
        </div>
    )
}

export default withStyles(styles)(ButtonBase)