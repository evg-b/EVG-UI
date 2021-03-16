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
const ButtonRound = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Button variant='text' color='primary' round >default</Button>
            <Button variant='contained' color='primary' round >contained</Button>
            <Button variant='outlined' color='primary' round >outlined</Button>
        </div>
    )
}

export default withStyles(styles)(ButtonRound)