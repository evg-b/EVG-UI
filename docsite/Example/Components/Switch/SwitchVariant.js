import React from 'react';
import { Switch, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const SwitchVariant = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Switch />
            <Switch />
            <Switch />
        </div>
    )
}

export default withStyles(styles)(SwitchVariant)