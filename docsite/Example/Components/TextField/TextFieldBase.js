import React from 'react';
import { TextField, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const TextFieldBase = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <TextField labelText='Base TextField' placeholder='placeholder' />
            <TextField disabled labelText='Disabled' placeholder='placeholder' value="Disabled" />
        </div>
    )
}

export default withStyles(styles)(TextFieldBase)