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
const TextFieldMultiline = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <div>
                <TextField multiline labelText='multiline base' placeholder='placeholder' color='primary' />
                <TextField rows={4} multiline labelText='multiline base' placeholder='placeholder' color='primary' />
            </div>
            <div>
                <TextField multiline labelText='multiline outlined' placeholder='placeholder' color='primary' outlined />
                <TextField rows={4} multiline labelText='multiline outlined' placeholder='placeholder' color='primary' outlined />
            </div>
        </div>
    )
}

export default withStyles(styles)(TextFieldMultiline)