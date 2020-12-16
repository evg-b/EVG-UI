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
const TextFieldColor = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <TextField color='--ifm-color-primary' labelText='css var' placeholder='placeholder' />
            <TextField color='primary' labelText='primary' placeholder='placeholder' />
            <TextField color='fail' labelText='fail' placeholder='placeholder' outlined />
        </div>
    )
}

export default withStyles(styles)(TextFieldColor)