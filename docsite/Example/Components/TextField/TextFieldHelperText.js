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
const TextFieldHelperText = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <TextField helperText='helperText' labelText='helperText' placeholder='placeholder' color='primary' />
        </div>
    )
}

export default withStyles(styles)(TextFieldHelperText)