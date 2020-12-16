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
const TextFieldOutlined = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <TextField labelText='Outlined' placeholder='Outlined' outlined />
            <TextField disabled labelText='Disabled' placeholder='Outlined' outlined value="Disabled" />
        </div>
    )
}

export default withStyles(styles)(TextFieldOutlined)