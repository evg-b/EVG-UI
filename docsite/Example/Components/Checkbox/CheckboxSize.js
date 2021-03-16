import React from 'react';
import { Checkbox, withStyles } from '@evg-b/evg-ui';

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
            <Checkbox size='small' color="primary" defaultChecked />
            <Checkbox size='medium' color="primary" defaultChecked />
            <Checkbox size='large' color="primary" defaultChecked />
            <Checkbox size='extra' color="primary" defaultChecked />
        </div>
    )
}

export default withStyles(styles)(CheckboxSize)