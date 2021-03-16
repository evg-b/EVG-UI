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
const ButtonVariant = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Button variant='text' color='primary'>default</Button>
            <Button variant='contained' color='primary'>Button</Button>
            <Button variant='outlined' color='primary'>outlined</Button>
        </div>
    )
}

export default withStyles(styles)(ButtonVariant)