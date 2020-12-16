import React from 'react';
import { withStyles } from 'react-jss';
import { Button } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const ButtonElevation = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Button variant='contained' color='--ifm-color-primary'>elevation</Button>
            <Button variant='contained' color='--ifm-color-primary' elevation={false}>no elevation</Button>
        </div>
    )
}

export default withStyles(styles)(ButtonElevation)