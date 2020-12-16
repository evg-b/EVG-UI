import React from 'react';
import { withStyles } from 'react-jss';
import { Checkbox } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const CheckboxBase = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Checkbox />
            <Checkbox defaultChecked />
            <Checkbox checked />
            <Checkbox defaultChecked disabled />
            <Checkbox defaultChecked indeterminate />
        </div>
    )
}

export default withStyles(styles)(CheckboxBase)