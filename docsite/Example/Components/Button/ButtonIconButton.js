import React from 'react';
import { IconButton, withStyles } from '@evg-b/evg-ui';
import {
    Close,
    Cancel,
    Menu,
    Visibility,
    Fullscreen,
} from '@evg-b/evg-icons';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const ButtonIconButton = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <IconButton><Close /></IconButton>
            <IconButton color='primary'><Cancel /></IconButton>
            <IconButton color='warn'><Menu /></IconButton>
            <IconButton color='success'><Fullscreen /></IconButton>
            <IconButton disabled><Visibility /></IconButton>
        </div>
    )
}

export default withStyles(styles)(ButtonIconButton)