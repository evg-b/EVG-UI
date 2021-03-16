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
const SwitchColor = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Switch color="default" defaultChecked />
            <Switch color="primary" defaultChecked />
            <Switch color="warn" defaultChecked />
            <Switch color="success" defaultChecked />
            <Switch color="fail" defaultChecked />
        </div>
    )
}

export default withStyles(styles)(SwitchColor)