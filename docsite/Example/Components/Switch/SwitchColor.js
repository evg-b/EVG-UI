import React from 'react';
import { withStyles } from 'react-jss';
import { Switch } from '@evg-b/evg-ui';

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
            <Switch color="--ifm-color-primary" defaultChecked />
            <Switch color="primary" defaultChecked />
            <Switch color="warn" defaultChecked />
            <Switch color="success" defaultChecked />
            <Switch color="fail" defaultChecked />
        </div>
    )
}

export default withStyles(styles)(SwitchColor)