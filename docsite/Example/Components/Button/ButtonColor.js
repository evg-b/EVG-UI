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
const ButtonColor = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Button >text</Button>
            <Button color='primary'>primary</Button>
            <Button color='warn'>warn</Button>
            <Button color='success'>success</Button>
            <Button color='fail'>fail</Button>
        </div>
    )
}

export default withStyles(styles)(ButtonColor)