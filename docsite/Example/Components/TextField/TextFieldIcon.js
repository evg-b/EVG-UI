import React from 'react';
import { withStyles } from 'react-jss';
import { TextField } from '@evg-b/evg-ui';
import { Close, Check } from '@evg-b/evg-icons';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*,&>div>*': {
            margin: '10px'
        }
    }
}
const TextFieldIcon = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <div>
                <TextField leadingIcon={<Check />} labelText='TextField' placeholder='placeholder' color='primary' />
                <TextField trailingIcon={<Close />} labelText='TextField' placeholder='placeholder' color='primary' />
                <TextField leadingIcon={<Check />} trailingIcon={<Close />} labelText='TextField' placeholder='placeholder' color='primary' />
            </div>
            <div>
                <TextField leadingIcon={<Check />} labelText='TextField outlined' placeholder='placeholder' color='primary' outlined />
                <TextField trailingIcon={<Close />} labelText='TextField outlined' placeholder='placeholder' color='primary' outlined />
                <TextField leadingIcon={<Check />} trailingIcon={<Close />} labelText='TextField outlined' placeholder='placeholder' color='primary' outlined />
            </div>
        </div>
    )
}

export default withStyles(styles)(TextFieldIcon)