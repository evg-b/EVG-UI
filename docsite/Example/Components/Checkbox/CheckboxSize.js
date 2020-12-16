import React from 'react';
import { withStyles } from 'react-jss';
import { Checkbox } from '@evg-b/evg-ui';

const styles = {
    base: {
        '&>*': {
            margin: '5px'
        }
    }
}
const CheckboxSize = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Checkbox size='small' color="--ifm-color-primary" defaultChecked />
            <Checkbox size='medium' color="--ifm-color-primary" defaultChecked />
            <Checkbox size='large' color="--ifm-color-primary" defaultChecked />
            <Checkbox size='extra' color="--ifm-color-primary" defaultChecked />
        </div>
    )
}

export default withStyles(styles)(CheckboxSize)