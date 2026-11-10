import React from 'react';
import { TextField, withStyles, Icon } from '@evg-b/evg-ui'


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
                <TextField leadingIcon={<Icon name="Check" />} labelText='TextField' placeholder='placeholder' color='primary' />
                <TextField trailingIcon={<Icon name="Close" />} labelText='TextField' placeholder='placeholder' color='primary' />
                <TextField leadingIcon={<Icon name="Check" />} trailingIcon={<Icon name="Close" />} labelText='TextField' placeholder='placeholder' color='primary' />
            </div>
            <div>
                <TextField leadingIcon={<Icon name="Check" />} labelText='TextField outlined' placeholder='placeholder' color='primary' outlined />
                <TextField trailingIcon={<Icon name="Close" />} labelText='TextField outlined' placeholder='placeholder' color='primary' outlined />
                <TextField leadingIcon={<Icon name="Check" />} trailingIcon={<Icon name="Close" />} labelText='TextField outlined' placeholder='placeholder' color='primary' outlined />
            </div>
        </div>
    )
}

export default withStyles(styles)(TextFieldIcon)