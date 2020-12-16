import React from 'react';
import { withStyles } from 'react-jss';
import { Switch } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '10px'
        }
    }
}
const SwitchBase = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Switch />
            <Switch defaultChecked />
            <Switch checked />
            <Switch disabled checked />
        </div>
    )
}

export default withStyles(styles)(SwitchBase)