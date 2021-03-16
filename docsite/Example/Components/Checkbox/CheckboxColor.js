import React from 'react';
import { Checkbox, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const CheckboxColor = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Checkbox color="default" defaultChecked />
            <Checkbox color="primary" defaultChecked />
            <Checkbox color="warn" defaultChecked />
            <Checkbox color="success" defaultChecked />
            <Checkbox color="fail" defaultChecked />
        </div>
    )
}

export default withStyles(styles)(CheckboxColor)