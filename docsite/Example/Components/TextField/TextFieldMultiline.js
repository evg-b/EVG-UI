import React from 'react';
import { TextField, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*,&>div>*': {
            margin: '10px'
        }
    },
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