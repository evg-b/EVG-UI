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
const SwitchSize = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Switch size='small' color="primary" defaultChecked />
            <Switch size='medium' color="primary" defaultChecked />
            <Switch size='large' color="primary" defaultChecked />
            <Switch size='extra' color="primary" defaultChecked />
        </div>
    )
}

export default withStyles(styles)(SwitchSize)