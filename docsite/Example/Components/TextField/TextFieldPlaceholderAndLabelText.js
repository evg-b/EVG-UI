import React from 'react';
import { withStyles } from 'react-jss';
import { TextField } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const TextFieldPlaceholderAndLabelText = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <TextField />
            <TextField labelText='labelText' />
            <TextField placeholder='placeholder' />
        </div>
    )
}

export default withStyles(styles)(TextFieldPlaceholderAndLabelText)